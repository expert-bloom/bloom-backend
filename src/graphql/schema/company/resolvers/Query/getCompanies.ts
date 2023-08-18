import type { QueryResolvers } from './../../../types.generated';

export const getCompanies: NonNullable<QueryResolvers['getCompanies']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await _ctx.service.Company.getCompanies();
};
