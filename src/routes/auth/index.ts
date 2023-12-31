import passport from 'passport';
import {
  type Profile,
  Strategy as GoogleStrategy,
} from 'passport-google-oauth20';
import express, { type Request } from 'express';
import { type VerifyCallback } from 'passport-oauth2';
import prisma from '@/lib/prisma';
import { type AccountType } from '@/graphql/schema/types.generated';
import jwt from 'jsonwebtoken';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const router = express.Router();

router.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',

      scope: ['email', 'profile'],
      passReqToCallback: true,
    },
    async function (
      req: Request,
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      verified: VerifyCallback,
    ) {
      if (!profile) {
        verified(null, {
          error: 'Auth-Profile not found!',
        });
        return;
      }

      const clientType = req.cookies?.clientType as AccountType;
      if (!clientType) {
        verified(new Error('Unknown Account Type'));
        return;
      }

      // 1st check if account exist
      const findAccountPayload = await prisma.account.findUnique({
        where: {
          email: profile._json.email,
        },
        include: {
          oAuthClient: true,
        },
      });

      if (findAccountPayload?.id) {
        if (findAccountPayload.accountType !== clientType) {
          verified(null, {
            error: 'Account Already Exist!',
          });
          return;
        }

        if (findAccountPayload?.oAuthClient.length === 0) {
          verified(null, {
            error:
              'Account is not associated with any social account, Login with credentials.',
          });
          return;
        }

        const isGoogleProvider = findAccountPayload.oAuthClient?.find(
          (o) => o.provider === profile.provider,
        );

        if (!isGoogleProvider) {
          verified(null, {
            error: 'This Account is linked with another social account!',
          });
          return;
        }

        // return the login account
        const { password, oAuthClient, ...account } = findAccountPayload;
        verified(null, {
          ...account,
        });
      } else {
        // signup with social
        console.log('clientType  ', clientType);

        const newUser = await prisma.account.create({
          data: {
            email: profile._json.email ?? '',
            image: profile._json.picture ?? '',
            accountType: clientType,
            userName: profile.displayName ?? '',
            fullName: profile.displayName ?? '',
            firstName: profile._json.given_name ?? '',
            lastName: profile._json.family_name ?? '',
            password: '-',
            isVerified: true,
            emailVerified: new Date(),
            oAuthClient: {
              create: {
                provider: profile.provider,
                providerAccountId: profile.id,
                accessToken, // after 24 hour
                refreshToken,
                expires: new Date(
                  new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
                ),
                tokenType: 'Bearer',
              },
            },

            ...(clientType === 'COMPANY'
              ? {
                  company: {
                    create: {},
                  },
                }
              : clientType === 'APPLICANT'
              ? {
                  applicant: {
                    create: {},
                  },
                }
              : clientType === 'AFFILIATE'
              ? {
                  affiliate: {
                    create: {},
                  },
                }
              : {}),
          },
        });

        if (!newUser) {
          verified(new Error('Error Creating Account!'));
          return;
        }

        const { password, ...account } = newUser;

        verified(null, {
          ...account,
        });
      }
    },
  ),
);

router.get(
  '/signup/google',
  (req, res, next) => {
    console.log('req.query ---------------------- : ', req.query);
    // set authType cookie

    if (req.query?.clientType) {
      res.cookie('clientType', req.query?.clientType, {
        // domain: process.env.NEXT_PUBLIC_DOMAIN ?? 'localhost',
        sameSite: 'none',
        path: '/',
        secure: true,
        expires: new Date(Date.now() + 2000000),
      });
    }

    if (req.query?.authType) {
      res.cookie('authType', req.query?.authType, {
        // domain: process.env.NEXT_PUBLIC_DOMAIN ?? 'localhost',
        sameSite: 'none',
        path: '/',
        secure: true,
        expires: new Date(Date.now() + 2000000),
      });
    }

    next();
  },
  passport.authenticate('google', {
    session: false,
    scope: ['email', 'profile'],
    passReqToCallback: true,
  }),
);

router.get('/logout', (req, res, next) => {
  console.log('logout -----> ', req.cookies?.authorization);

  res.clearCookie('authorization', {
    sameSite: 'none',
    path: '/',
    secure: true,
  });
  res.sendStatus(200);
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${
      process.env.WEB_APP_URL ?? ''
    }/auth/social-sign-in/?error=Something Wrong!`,
    session: false, // authInfo: true,
    // failureMessage: true,
    passReqToCallback: true,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log('User --------- ', req?.user);

    if (req.user?.error) {
      res
        .status(400)
        .redirect(
          `${process.env.WEB_APP_URL ?? ''}/auth/social-sign-in/?error=${
            (req?.user?.error as string) ?? '-'
          }`,
        );
      return;
    }

    if (!req?.user) {
      res.redirect(
        `${
          process.env.WEB_APP_URL ?? ''
        }/auth/social-sign-in/?error=Verification User Not Found!`,
      );
      return;
    }

    const account = req.user;
    const signingKey = process.env.JWT_SECRET;
    const url = process.env.WEB_APP_URL ?? '-';

    const token = jwt.sign(account, signingKey, {
      subject: 'user-token',
      expiresIn: '24h',
      issuer: process.env.ISSUER,
      algorithm: 'HS256',
    });

    console.log('domain: -- ', url);
    // res.cookie('authorization', token, {})

    // set autorization header
    // res.setHeader('Authorization', `Bearer ${token}`);

    res.setHeader(
      'Set-Cookie',
      `authorization=${token}; Path=/; SameSite=None; Secure; Expires=${new Date(
        Date.now() + 1000 * 60 * 60 * 24,
      ).toUTCString()}`,
    );

    res.status(200).redirect(`${url}/auth/social-sign-in/?success=true`);
  },
);

export default router;
