import type { MutationResolvers } from './../../../types.generated';

export const logOut: NonNullable<MutationResolvers['logOut']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const res =  await _ctx.request.cookieStore?.delete({
    name: 'authorization',
  });

  console.log('logout : ', res);

  return true;
};
