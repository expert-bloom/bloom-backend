import passport from 'passport';
import {
  type Profile,
  Strategy as GoogleStrategy,
} from 'passport-google-oauth20';
import process from 'process';
import express, { type Request } from 'express';
import { type VerifyCallback } from 'passport-oauth2';
import prisma from '@/lib/prisma';
import { type AccountType } from '@/graphql/schema/types.generated';
import jwt from 'jsonwebtoken';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

type AuthType = 'login' | 'signup';

const router = express.Router();

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
      // check if this is a login or signup from the cookie and set the authType
      const authType = req.cookies?.authType as AuthType;
      const clientType = req.cookies?.clientType as AccountType;

      // const authType = req.query?.authType as AuthType;
      console.log('coookiie > ----> : ', authType, clientType);

      if (!authType) {
        verified(null, {
          error: 'Unknown Operation',
        });
        return;
      }

      if (!profile) {
        verified(new Error('Auth-Profile not found!'));
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

      // console.log('findAccountPayload : ', findAccountPayload);
      // verified(new Error('error'));
      // return;

      // for login
      if (authType === 'login') {
        // check if account exist with oAuthClient
        if (
          !findAccountPayload ||
          findAccountPayload?.oAuthClient.length === 0
        ) {
          verified(null, {
            error: 'Account Not Found! Please Sign-up!',
          });
          return;
        }

        // check if account is linked with another login method

        console.log(
          'findAccountPayload : ',
          findAccountPayload.oAuthClient,
          profile.provider,
        );

        const isGoogleProvider = findAccountPayload.oAuthClient?.find(
          (o) => o.provider === profile.provider,
        );

        if (!isGoogleProvider) {
          verified(null, {
            error: 'This Account is linked with another login method!',
          });
          return;
        }

        // return the login account
        const { password, oAuthClient, ...account } = findAccountPayload;
        verified(null, {
          ...account,
        });
      }

      if (authType === 'signup') {
        if (findAccountPayload?.id) {
          verified(null, {
            error: 'Account Already Exist, Please login!',
          });
          return;
        }

        // signup with social
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
            isVerified: !!profile._json.email_verified,
            emailVerified: profile._json.email_verified ? null : new Date(),
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
          include: {
            company: true,
          },
        });

        if (!newUser) {
          verified(new Error('Error Creating Account!'));
          return;
        }

        const { company, password, ...account } = newUser;

        verified(null, {
          ...account,
        });
        return;
      }

      verified(null, {
        error: 'Unknown Operation',
      });
    },
  ),
);

/* passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: '123' });
  });
});

passport.deserializeUser(function (user, cb: any) {
  process.nextTick(function () {
    return cb(null, user);
  });
}); */

router.use(passport.initialize());

router.get(
  '/signup/github',
  passport.authenticate('github', {
    scope: ['user:email', 'user:profile'],
    session: false,
  }),
);

router.get(
  '/signup/google',
  passport.authenticate('google', {
    session: false,
    scope: ['email', 'profile'],
  }),
);

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
    const signingKey = process.env.JWT_SECRET as string;

    const token = jwt.sign(account, signingKey, {
      subject: 'user-token',
      expiresIn: '24h',
      issuer: 'localhost',
      algorithm: 'HS256',
    });

    // await req.cookieStore?.set({
    //   name: 'authorization',
    //   sameSite: 'none',
    //   secure: true,
    //   httpOnly: true,
    //   domain: 'localhost',
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    //   value: token,
    // });

    // set header with token like the above
    const url = process.env.WEB_APP_URL ?? '-';
    const domain = process.env.DOMAIN ?? '-';

    console.log('domain: -- ', url);

    res.setHeader(
      'Set-Cookie',
      `authorization=${token}; Path=/; HttpOnly; SameSite=None; Secure; Domain=${domain}; Expires=${new Date(
        Date.now() + 1000 * 60 * 60 * 24,
      ).toUTCString()}`,
    );

    res.status(200).redirect(`${url}/auth/social-sign-in/?social=google`);
  },
);

export default router;