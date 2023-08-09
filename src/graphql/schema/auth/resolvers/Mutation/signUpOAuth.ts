import type { MutationResolvers } from './../../../types.generated';

export const signUpOAuth: NonNullable<
  MutationResolvers['signUpOAuth']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Auth.signUpOAuth(_arg.input)
};
