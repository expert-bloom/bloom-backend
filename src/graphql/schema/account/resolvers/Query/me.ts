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

  const mePayload = await _ctx.service.Account.getMe({
    accountId: _ctx.jwt?.id,
  });

  if (mePayload === null) {
    // todo : block this request (fake jwt)
    await _ctx.request.cookieStore?.delete({
      name: 'authorization',
      path: '/', // domain: 'localhost',
    });
  }

  return mePayload;
};
