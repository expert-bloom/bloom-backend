import type { QueryResolvers } from './../../../types.generated';
import { GraphQLError } from 'graphql/error';

export const getJobApplications: NonNullable<QueryResolvers['getJobApplications']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.jwt?.id) {
    throw new GraphQLError('Unauthorized');
  }

  const jobApplications = await _ctx.service.Applicant.getJobApplications({
    ..._arg.input,
    filter: {
      ..._arg.input.filter,
    },
  });

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
