import type { MutationResolvers } from './../../../types.generated';

export const respondInterview: NonNullable<
  MutationResolvers['respondInterview']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Applicant.respondInterview(_arg.input);
};
