import type { MutationResolvers } from './../../../types.generated';

export const logOut: NonNullable<MutationResolvers['logOut']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const res = await _ctx.request.cookieStore?.delete({
    name: 'authorization',
    path: '/',
  });


  _ctx.request.headers.set(
    'Set-Cookie',
    `authorization=''; Path=/; SameSite=None; Secure; Expires=${new Date(
      0,
    ).toUTCString()}`,
  );


  return true;
};
