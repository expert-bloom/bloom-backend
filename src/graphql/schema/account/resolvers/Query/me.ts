import type { QueryResolvers } from './../../../types.generated';

export const me: NonNullable<QueryResolvers['me']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await _ctx.service.Auth.getMe(_arg.input);
};
