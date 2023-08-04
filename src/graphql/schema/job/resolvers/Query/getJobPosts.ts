import type { QueryResolvers } from './../../../types.generated';

export const getJobPosts: NonNullable<QueryResolvers['getJobPosts']> = async (
  _parent,
  { input },
  { service },
) => {
  /* Implement Query.getJobPosts resolver logic here */

  return await service.Job.getPostedJobs(input);
};
