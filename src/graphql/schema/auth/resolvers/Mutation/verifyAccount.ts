import type { MutationResolvers } from './../../../types.generated';
import jwt from 'jsonwebtoken';

export const verifyAccount: NonNullable<MutationResolvers['verifyAccount']> = async (_parent, _arg, _ctx) => {
  /* Implement Mutation.verifyAccount resolver logic here */

  console.log('decoded token --> ', _ctx.jwt);

  if (!_ctx.jwt?.id) {
    return {
      errors: [
        {
          message: 'Invalid token',
        },
      ],
    };
  }

  const token = _arg.input.token;
  const signingKey = process.env.JWT_SECRET;
  const host = process.env.DOMAIN;

  try {
    const decoded: any = jwt.verify(token, signingKey, {
      subject: 'magic-link',
      issuer: host,
      algorithms: ['HS256'],
      ignoreExpiration: false,
    });

    console.log('decoded token --> ', decoded);
    if (decoded?.id !== _ctx.jwt?.id) {
      return {
        errors: [
          {
            message: 'Invalid token',
          },
        ],
      };
    }

    const account = await _ctx.service.Account.findOne({
      accountFilter: {
        id: decoded.id,
      },
    });

    if (!account?.account) {
      return {
        errors: [
          {
            message:
              process.env.NODE_ENV === 'production'
                ? 'Invalid token'
                : 'Account Not Found with this token',
          },
        ],
      };
    }

    if (account.account.isVerified && account.account.emailVerified) {
      return {
        errors: [
          {
            message: 'Account already verified',
          },
        ],
      };
    }

    // update account status and also the authorization cookie
    const accountUpdate = await _ctx.service.Account.updateProfile({
      accountId: decoded.id,
      account: {
        emailVerified: new Date(),
        isVerified: true,
      },
    });

    console.log('accountUpdate --> ', accountUpdate);

    if (accountUpdate.errors.length > 0) {
      return {
        errors: [
          {
            message: 'Error Validating Account',
          },
          ...accountUpdate.errors,
        ],
        account: null,
      };
    }

    if (accountUpdate.account) {
      const signingKey = process.env.JWT_SECRET;
      const domain = process.env.DOMAIN;

      const token = jwt.sign(account.account, signingKey, {
        subject: 'user-token',
        expiresIn: '24h',
        issuer: domain,
        algorithm: 'HS256',
      });

      await _ctx.request.cookieStore?.set({
        name: 'authorization',
        sameSite: 'none',
        secure: true,
        httpOnly: true,
        domain,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        value: token,
      });

      return {
        errors: [],
        account: accountUpdate.account,
      };
    }

    return {
      errors: [
        {
          message: 'Something went wrong',
        },
      ],

      account: null,
    };
  } catch (err: any) {
    return {
      errors: [
        {
          message: err?.message ?? 'Invalid token',
        },
      ],

      account: null,
    };
  }

  /* const account = await _ctx.service.Account.findOne({
    accountFilter: {
      id: decoded.id,
    },
  });

  if (!account?.account) {
    return {
      errors: [
        {
          message: 'Invalid token',
        },
      ],
    };
  } */
};
