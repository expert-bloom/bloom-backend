import type { MutationResolvers } from './../../../types.generated';

export const updateProfile: NonNullable<
  MutationResolvers['updateProfile']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Account.updateProfile(_arg.input);
};
