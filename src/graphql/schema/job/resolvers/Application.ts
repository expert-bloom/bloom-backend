import type { ApplicationResolvers } from './../../types.generated';
import { GraphQLError } from 'graphql/error';

export const Application: ApplicationResolvers = {
  jobPost: async (parent, args, context, info) => {
    // console.log('account resolver parent : ', parent);

    console.log('args: ', args, 'parents: ', parent, 'info: ', info);

    if (info.operation.name?.value === 'GetCompanyJobPosts') {
      return null;
    }

    return await context.service.Job.getJobPost({
      id: parent.jobPostId,
    });
  },

  /* applicant: async (parent, args, context) => {
    // console.log('account resolver parent : ', parent);

    const applicant = await context.service.Applicant.getApplicant({
      id: parent.applicantId,
    });

    if (applicant === null) {
      throw new GraphQLError(
        `applicant cant be null for a given application : ${parent.id}`,
      );
    }

    return applicant;
  } */
};
