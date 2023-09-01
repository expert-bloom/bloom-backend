import type { QueryResolvers } from './../../../types.generated';

export const getJobPost: NonNullable<QueryResolvers['getJobPost']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await _ctx.service.Job.getJobPost(_arg.input);
};
