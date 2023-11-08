import type { QueryResolvers } from './../../../types.generated';

export const me: NonNullable<QueryResolvers['me']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  // console.log('me query invoked ---- > ', _ctx?.jwt);

  if (!_ctx.jwt?.id) {
    return null;
  }

  return await _ctx.service.Account.getMe({ accountId: _ctx.jwt?.id });
};
