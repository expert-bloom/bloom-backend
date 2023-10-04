import prisma from '@/lib/prisma';
import type {
  CreateApplicationInput,
  GetApplicantInput,
  GetApplicantsInput,
  GetJobApplicationsInput,
} from '@/graphql/schema/types.generated';
import { ApplicationStatus } from '.prisma/client';

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
  const applications = await prisma.jobApplication.findMany({
    where: {
      applicantId: input.applicantId,
    },
    include: {
      // jobPost: true,
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
