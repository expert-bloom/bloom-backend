import type { QueryResolvers } from './../../../types.generated';

export const getJobApplications: NonNullable<QueryResolvers['getJobApplications']> = async (_parent, _arg, _ctx) => {
  const signingKey = process.env.JWT_SECRET as string;

  const jobApplications = await _ctx.service.Applicant.getJobApplications(
    _arg.input,
  );

  return {
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    edges: jobApplications.map((application) => ({
      node: application,
      cursor: application.id,
    })),
  };
};
