import type { MutationResolvers } from './../../../types.generated';

export const profileUpdate: NonNullable<MutationResolvers['profileUpdate']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Account.updateProfile({
    ..._arg.input,
    accountId: _ctx.jwt?.id,
  });
};
