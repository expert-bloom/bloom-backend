import type { MutationResolvers } from './../../../types.generated';

export const signUp: NonNullable<MutationResolvers['signUp']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await _ctx.service.Auth.signUp(_arg.input);
};
