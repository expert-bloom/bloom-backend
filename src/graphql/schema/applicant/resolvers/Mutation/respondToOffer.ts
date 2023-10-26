import type { MutationResolvers } from './../../../types.generated';

export const respondToOffer: NonNullable<
  MutationResolvers['respondToOffer']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Applicant.respondOffer(_arg.input);
};
