/* eslint-disable */
import prisma from '@/lib/prisma';
import type {
  CreateApplicationInput,
  GetApplicantInput,
  GetApplicantsInput,
  GetJobApplicationsInput,
} from '@/graphql/schema/types.generated';
import { ApplicationStatus } from '.prisma/client';
import { GraphQLError } from 'graphql/error';
import { clearUndefined } from '@/util/helper';

async function getAllApplicants(input: GetApplicantsInput) {
  const applicant = await prisma.applicant.findMany({
    where: {},
    include: {
      // account: true,
      _count: true,
    },

    take: input.first ?? undefined,
    skip: input.after != null ? 1 : 0,
    ...(input.after != null
      ? {
          cursor: { id: input.after },
        }
      : {}),
  });

  // console.log('applicant : ', applicant);

  return applicant;
}

async function getApplicant(input: GetApplicantInput) {
  const applicant = await prisma.applicant.findUnique({
    where: {
      id: input.id,
    },
    include: {
      // account: true,
      // workExperience: true,
      // savedJobs: true,
    },
  });

  return applicant;
}

async function getApplicantAccount(input: GetApplicantInput) {
  const applicant = await prisma.applicant.findUnique({
    where: {
      id: input.id,
    },
    include: {
      account: true,
    },
  });

  return applicant?.account ?? null;
}

async function getSavedJobs(input: GetApplicantInput) {
  const savedJobs = await prisma.jobPost.findMany({
    where: {
      savedBy: {
        some: {
          id: input.id,
        },
      },
    },
  });

  return savedJobs;
}

async function getJobApplications(input: GetJobApplicationsInput) {
  const filter = clearUndefined(input.filter ?? {});

  console.log('getJobApplications filter : ', filter);

  const applications = await prisma.jobApplication.findMany({
    where: {
      ...filter,
      ...(filter?.ids ? { id: { in: filter?.ids } } : {}),
    },
    include: {
      interview: true,
      offer: true,
    },
  });

  return applications;
}

async function getWorkExperience(input: GetApplicantInput) {
  const workExperience = await prisma.workExperience.findMany({
    where: {
      // id: ,
      applicant: {
        id: input.id,
      },
    },
  });

  return workExperience;
}

async function createApplication(input: CreateApplicationInput) {
  const application = await prisma.jobApplication.create({
    data: {
      applicantId: input.applicantId,
      jobPostId: input.jobPostId,
      companyId: input.companyId,
      status: ApplicationStatus.PENDING,
      resume: input.resume,
      coverLetter: input.coverLetter,
      attachment: input.attachment,
      email: input.email,
      phone: input.phone,
    },
  });

  return {
    errors: [],
    application,
  };
}

async function respondInterview(input: GetApplicantInput) {
  let application = await prisma.interview.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'APPLICANT_RESPONDED',
      answerVideo: 'input.answerVideo',
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return application;
}

async function refuseInterview(input: GetApplicantInput) {
  let application = await prisma.interview.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'APPLICANT_REFUSED',
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return application;
}

async function respondOffer(input: GetApplicantInput) {
  let application = await prisma.interview.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'APPLICANT_RESPONDED',
      answerVideo: 'input.answerVideo',
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return application;
}

async function refuseOffer(input: GetApplicantInput) {
  let application = await prisma.interview.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'APPLICANT_REFUSED',
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return application;
}

const account = {
  getApplicant,
  getAllApplicants,
  getSavedJobs,
  getWorkExperience,
  getApplicantAccount,
  getJobApplications,
  createApplication,
};

export default account;
