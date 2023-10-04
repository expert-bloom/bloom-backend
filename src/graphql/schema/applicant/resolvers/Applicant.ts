import type { ApplicantResolvers } from './../../types.generated';
import { GraphQLError } from 'graphql/error';

export const Applicant: ApplicantResolvers = {
  savedJobs: async (parent, args, context) => {
    const saved = await context.service.Applicant.getSavedJobs({
      id: parent.id,
    });

    return {
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
      edges: saved.map((job) => ({ node: job, cursor: job.id })),
    };
  },

  workExperience: async (parent, args, context) => {
    const experience = await context.service.Applicant.getWorkExperience({
      id: parent.id ?? '',
    });

    return experience;
  },

  account: async (parent, args, context) => {
    // console.log('account resolver parent : ', parent);

    const applicant = await context.service.Applicant.getApplicantAccount({
      id: parent.id,
    });

    if (applicant === null) {
      throw new GraphQLError(
        `account cant be null for a given applicant : ${parent.id}`,
      );
    }

    return applicant;
  }
};
