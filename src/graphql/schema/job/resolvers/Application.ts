import type { ApplicationResolvers } from './../../types.generated';

export const Application: ApplicationResolvers = {
  jobPost: async (parent, args, context, info) => {
    // console.log('account resolver parent : ', parent);

    // console.log('args: ', args, 'parents: ', parent, 'info: ', info);

    if (info.operation.name?.value === 'GetCompanyJobPosts') {
      return null;
    }

    return await context.service.Job.getJobPost({
      id: parent.jobPostId,
    });
  },

  applicant: async (parent, args, context) => {
    // console.log('account resolver parent : ', parent);

    return await context.service.Applicant.getApplicant({
      id: parent.applicantId,
    });
  },
  company: async (parent, args, context) => {
    console.log('get company resolver parent : ', parent.companyId);

    return context.service.Company.getCompany({
      id: parent.companyId,
    });
  },
};
