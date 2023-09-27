import type { QueryResolvers } from './../../../types.generated';

export const getSavedApplicant: NonNullable<
  QueryResolvers['getSavedApplicant']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Company.getSavedApplicants(_arg.input);
};
