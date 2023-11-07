import type { MutationResolvers } from './../../../types.generated';
import process from 'process';
import jwt from 'jsonwebtoken';

export const logIn: NonNullable<MutationResolvers['logIn']> = async (
  _parent,
  { input },
  { service, request },
) => {
  const account = await service.Auth.logIn(input);

  if (account.account?.id) {
    const signingKey = process.env.JWT_SECRET as string;

    const token = jwt.sign(account.account, signingKey, {
      subject: 'user-token',
      expiresIn: '24h',
      issuer: 'localhost',
      algorithm: 'HS256',
    });

    const jwtToken = await request.cookieStore
      ?.get('authorization')
      .then((res) => res?.value ?? undefined);

    console.log('jwtToken --- : ', jwtToken);
    const domain = process.env.DOMAIN ?? '-';


    await request.cookieStore?.set({
      name: 'authorization',
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      domain,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      value: token,
    });
  }

  return account;
};
