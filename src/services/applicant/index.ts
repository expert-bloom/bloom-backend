/* eslint-disable */
import prisma from "@/lib/prisma";
import type {
  CreateApplicationInput,
  GetApplicantInput,
  GetApplicantsInput,
  GetApplicationFilter,
  GetJobApplicationsInput,
  RespondInterviewInput,
  RespondOfferInput
} from "@/graphql/schema/types.generated";
import { ApplicationStatus } from ".prisma/client";
import { GraphQLError } from "graphql/error";
import { clearUndefined } from "@/util/helper";

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
  const nonNullFilter = clearUndefined(input.filter ?? {});

  let ids: string[] | undefined = undefined;
  if (nonNullFilter?.ids) {
    ids = nonNullFilter?.ids;
    delete nonNullFilter.ids;
  }

  const applications = await prisma.jobApplication.findMany({
    where: {
      ...nonNullFilter,
      ...(ids ? { id: { in: ids } } : {}),
    },
    include: {
      interview: true,
      offer: true,
    },
  });

  return applications;
}

async function getJobApplication(
  input: GetApplicationFilter & {
    applicantId: string;
  },
) {
  const filter = clearUndefined(input ?? {});

  console.log('getJobApplications filter : ', filter);

  const application = await prisma.jobApplication.findUnique({
    where: {
      applicantId: input.applicantId,
      ...filter,
    },
    include: {
      interview: true,
      offer: true,
    },
  });

  return application ?? null;
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

  console.log('createApplication input : ', input);

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

async function respondInterview(input: RespondInterviewInput) {
  const updatedInterview = await prisma.interview.update({
    where: {
      id: input.interviewId,
      applicantId: input.applicantId,
    },
    data: {
      status: input?.refuse ? 'APPLICANT_REFUSED' : 'APPLICANT_RESPONDED',
      answerVideo: input.interviewVideoUrl,
    },
  });

  return updatedInterview;
}

async function refuseInterview(input: GetApplicantInput) {
  const updatedInterview = await prisma.interview.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'APPLICANT_REFUSED',
    },
  });

  return updatedInterview;
}

async function respondOffer(input: RespondOfferInput) {
  let updatedOffer = await prisma.jobApplication.update({
    where: {
      id: input.applicationId,
      applicantId: input.applicantId,
    },
    data: {
      status: input.refuse ? 'OFFER' : 'ACCEPTED',

      offer: {
        update: {
          status: input.refuse ? 'APPLICANT_REFUSED' : 'ACCEPTED',
        },
      },
    },
    include: {
      offer: true,
    },
  });

  if (updatedOffer?.offer === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return updatedOffer.offer;
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
  respondInterview,
  respondOffer,
  getJobApplication,
};

export default account;
