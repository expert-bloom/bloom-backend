import prisma from '@/lib/prisma';
import {
  GetApplicantInput,
  GetApplicantPayload,
  GetApplicantsInput,
} from '@/graphql/schema/types.generated';

async function getAllApplicants(input: GetApplicantsInput) {
  const applicant = await prisma.applicant.findMany({
    where: {},
    include: {
      // account: true,
      _count: true,
    },

    take: input.first ?? undefined,
    skip: input.after != null ? 1 : 0,
    cursor: {
      id: input.after ?? undefined,
    },

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

const account = {
  getApplicant,
  getAllApplicants,
  getSavedJobs,
  getWorkExperience,
};

export default account;
