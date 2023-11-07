import type { MutationResolvers } from './../../../types.generated';

export const offerApplicant: NonNullable<MutationResolvers['offerApplicant']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Company.acceptInterviewAndCreateOffer(_arg.input);
};
