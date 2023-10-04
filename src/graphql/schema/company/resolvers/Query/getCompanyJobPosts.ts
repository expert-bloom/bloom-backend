import type { QueryResolvers } from './../../../types.generated';

export const getCompanyJobPosts: NonNullable<
  QueryResolvers['getCompanyJobPosts']
> = async (_parent, _arg, { service }) => {
  return await service.Job.getCompanyPostedJobs(_arg.input);
};
