import passport from 'passport';

import express, { type Request } from 'express';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { type VerifyCallback } from 'passport-oauth2';

const router = express.Router();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
    session: false,
  }),
  function (req, res) {
    console.log(
      'User --------- ', // req.cookies,
      // req.headers,
      req?.user,
    );

    // Successful authentication, redirect home.
    res.redirect(
      `${process.env.WEB_APP_URL}/auth/social-sign-in/?success=true`,
    );
  },
);

router.get(
  '/signup/github',
  passport.authenticate('github', {
    scope: ['user:email', 'user:profile'],
    session: false,
  }),
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
      passReqToCallback: true,
    },
    function (
      req: Request,
      accessToken: string,
      refreshToken: string,
      profile: any,
      verified: VerifyCallback,
    ) {
      // check if this is a login or signup from the cookie and set the authType
      const authType = req.cookies.authType;

      console.log('authType: ', authType, req.cookies);

      const isValid = false;

      if (isValid) {
        verified(new Error('error'));
      }

      verified(null, profile);
    },
  ),
);
