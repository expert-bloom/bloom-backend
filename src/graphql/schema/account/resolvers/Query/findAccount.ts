import type { QueryResolvers } from './../../../types.generated';

export const findAccount: NonNullable<QueryResolvers['findAccount']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await _ctx.service.Account.findOne(_arg.input);
};
