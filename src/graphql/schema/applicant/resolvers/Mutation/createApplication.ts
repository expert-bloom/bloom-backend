import type { MutationResolvers } from './../../../types.generated';

export const createApplication: NonNullable<MutationResolvers['createApplication']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Applicant.createApplication(_arg.input);
};
