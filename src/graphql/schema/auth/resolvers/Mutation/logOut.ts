import type { MutationResolvers } from './../../../types.generated';

export const logOut: NonNullable<MutationResolvers['logOut']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  // const res = await _ctx.request.cookieStore?.delete('authorization');
  const res = await _ctx.request.cookieStore?.delete({
    name: 'authorization',
    path: '/',
    domain: 'expert-bloom-obinasbaba.koyeb.app',
  });

  console.log('headers : ', Object.keys(_ctx));

  // _ctx.request.headers.set(
  //   'Set-Cookie',
  //   `authorization=''; Path=/; SameSite=None; Secure; Expires=${new Date(
  //     0,
  //   ).toUTCString()}`,
  // );

  return true;
};
