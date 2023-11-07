import type { MutationResolvers } from './../../../types.generated';

export const saveApplicant: NonNullable<MutationResolvers['saveApplicant']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Company.saveApplicant(_arg.input);
};
