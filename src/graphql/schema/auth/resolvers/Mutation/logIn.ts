import type { MutationResolvers } from './../../../types.generated';
import jwt from 'jsonwebtoken';

export const logIn: NonNullable<MutationResolvers['logIn']> = async (
  _parent,
  { input },
  { service, request, params },
) => {
  const account = await service.Auth.logIn(input);

  if (account.account?.id) {
    const signingKey = process.env.JWT_SECRET;


    const token = jwt.sign(account.account, signingKey, {
      subject: 'user-token',
      expiresIn: '24h',
      issuer: process.env.ISSUER,
      algorithm: 'HS256',
    });

    await request.cookieStore?.set({
      name: 'authorization',
      sameSite: 'none',
      secure: true,
      domain: null,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      value: token,
    });
  }

  return account;
};
