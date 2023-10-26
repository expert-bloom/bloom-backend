import type { MutationResolvers } from './../../../types.generated';

export const sendInterviewRequest: NonNullable<
  MutationResolvers['sendInterviewRequest']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Company.acceptApplicationAndCreateInterview(
    _arg.input,
  );
};
