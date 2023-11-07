import type { MutationResolvers } from './../../../types.generated';

export const createJobPost: NonNullable<MutationResolvers['createJobPost']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Job.createJobPost(_arg.input);
};
