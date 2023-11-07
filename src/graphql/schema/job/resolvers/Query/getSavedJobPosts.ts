import type { QueryResolvers } from './../../../types.generated';

export const getSavedJobPosts: NonNullable<QueryResolvers['getSavedJobPosts']> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Job.getSavedJobs(_arg.input);
};
