import type { MutationResolvers } from './../../../types.generated';

export const applicantProfileUpdate: NonNullable<
  MutationResolvers['applicantProfileUpdate']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Account.updateProfile(_arg.input);
};
