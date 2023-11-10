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

type AuthType = 'login' | 'signup';

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
      // check if this is a login or signup from the cookie and set the authType
      const authType = req.cookies?.authType as AuthType;
      const clientType = req.cookies?.clientType as AccountType;

      // const authType = req.query?.authType as AuthType;
      console.log('coookiie > ----> : ', authType, clientType, req.query);

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
        error: 'Something Wrong!',
      });
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
        sameSite: 'lax',
        path: '/',
        expires: new Date(Date.now() + 2000000),
      });
    }

    if (req.query?.authType) {
      res.cookie('authType', req.query?.authType, {
        // domain: process.env.NEXT_PUBLIC_DOMAIN ?? 'localhost',
        sameSite: 'lax',
        path: '/',
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
    const domain = process.env.DOMAIN ?? '-';

    const token = jwt.sign(account, signingKey, {
      subject: 'user-token',
      expiresIn: '24h',
      issuer: domain,
      algorithm: 'HS256',
    });

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
