import type { MutationResolvers } from './../../../types.generated';

export const profileUpdate: NonNullable<
  MutationResolvers['profileUpdate']
> = async (_parent, _arg, _ctx) => {
  /* Implement Mutation.profileUpdate resolver logic here */

  return await _ctx.service.Account.updateProfile(_arg.input);
};
