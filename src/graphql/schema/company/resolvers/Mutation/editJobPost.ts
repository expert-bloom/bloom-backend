import type { MutationResolvers } from './../../../types.generated';

export const editJobPost: NonNullable<MutationResolvers['editJobPost']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Job.editJobPost(_arg.input);
};
