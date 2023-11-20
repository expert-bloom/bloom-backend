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
    applicantId: () => { /* Application.applicantId resolver is required because Application.applicantId exists but ApplicationMapper.applicantId does not */ },
    attachment: () => { /* Application.attachment resolver is required because Application.attachment exists but ApplicationMapper.attachment does not */ },
    companyId: () => { /* Application.companyId resolver is required because Application.companyId exists but ApplicationMapper.companyId does not */ },
    coverLetter: () => { /* Application.coverLetter resolver is required because Application.coverLetter exists but ApplicationMapper.coverLetter does not */ },
    createdAt: () => { /* Application.createdAt resolver is required because Application.createdAt exists but ApplicationMapper.createdAt does not */ },
    email: () => { /* Application.email resolver is required because Application.email exists but ApplicationMapper.email does not */ },
    interview: () => { /* Application.interview resolver is required because Application.interview exists but ApplicationMapper.interview does not */ },
    jobPostId: () => { /* Application.jobPostId resolver is required because Application.jobPostId exists but ApplicationMapper.jobPostId does not */ },
    offer: () => { /* Application.offer resolver is required because Application.offer exists but ApplicationMapper.offer does not */ },
    phone: () => { /* Application.phone resolver is required because Application.phone exists but ApplicationMapper.phone does not */ },
    resume: () => { /* Application.resume resolver is required because Application.resume exists but ApplicationMapper.resume does not */ },
    status: () => { /* Application.status resolver is required because Application.status exists but ApplicationMapper.status does not */ },
    updatedAt: () => { /* Application.updatedAt resolver is required because Application.updatedAt exists but ApplicationMapper.updatedAt does not */ }
};
