/* eslint-disable @typescript-eslint/restrict-template-expressions */
import prisma from '@/lib/prisma';
import {
  GetApplicantInput,
  GetSavedApplicantInput,
  OfferApplicantInput,
  SaveApplicantInput,
  SendInterviewRequestInput,
} from '@/graphql/schema/types.generated';
import { GraphQLError } from 'graphql/error';

async function getCompanies() {
  const companies = await prisma.company.findMany({
    where: {},
    include: {
      // account: true,
    },
  });

  return companies;
}

async function getSavedApplicants(input: GetSavedApplicantInput) {
  const company = await prisma.company.findUnique({
    where: {
      id: input.companyId,
    },
    include: {
      savedApplicants: true,
    },
  });

  if (company === null) {
    throw new GraphQLError(`No company found with id ${input.companyId}`);
  }

  return company.savedApplicants;
}

async function saveApplicant(input: SaveApplicantInput) {
  const company = await prisma.company.update({
    where: {
      id: input.companyId,
    },
    data: {
      savedApplicants: {
        ...(input.save === true
          ? {
              connect: {
                id: input.applicantId,
              },
            }
          : {
              disconnect: {
                id: input.applicantId,
              },
            }),
      },
    },
    include: {
      savedApplicants: true,
    },
  });

  if (company === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${input.applicantId}`,
    );
  }

  console.log('saved-- applicant : ', company.savedApplicants.length);

  return company.savedApplicants.length !== 0;
}

async function getCompanyAccount(input: GetApplicantInput) {
  const applicant = await prisma.company.findUnique({
    where: {
      id: input.id,
    },
    include: {
      account: true,
    },
  });

  return applicant?.account ?? null;
}

async function acceptApplicationAndCreateInterview(
  input: SendInterviewRequestInput,
) {
  let application = await prisma.jobApplication.findUnique({
    where: {
      id: input.applicationId,
    },
  });

  if (application === null) {
    throw new GraphQLError(
      'No application found with id : ' + `${input.applicationId}`,
    );
  }

  application = await prisma.jobApplication.update({
    where: {
      id: input.applicationId,
    },
    data: {
      status: 'INTERVIEW',
    },
  });

  const newInterview = await prisma.interview.create({
    data: {
      applicantId: application.applicantId,
      companyId: application.companyId,
      jobPostId: application.jobPostId,
      jobApplicationId: application.id,
      description: input.description,
      deadline: input.date,
      status: 'PENDING',
    },
  });

  return newInterview;
}

async function acceptInterviewAndCreateOffer(input: OfferApplicantInput) {
  const application = await prisma.jobApplication.update({
    where: {
      id: input.applicationId,
      applicantId: input.applicantId,
    },
    data: {
      status: 'OFFER',
      interview: {
        update: {
          status: 'ACCEPTED',
        },
      },
    },
  });

  if (application === null) {
    throw new GraphQLError(
      'No application found with id : ' + `${input.applicationId}`,
    );
  }

  const newOffer = await prisma.offer.create({
    data: {
      applicantId: application.applicantId,
      companyId: application.companyId,
      jobPostId: application.jobPostId,
      jobApplicationId: application.id,
      description: input.description,
      deadline: new Date(),
      status: 'PENDING',
    },
  });

  return newOffer;
}

async function rejectApplication(input: GetApplicantInput) {
  let application = await prisma.jobApplication.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'REJECTED',
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return application;
}

async function rejectInterview(input: GetApplicantInput) {
  const application = await prisma.interview.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'REJECTED',
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  return application;
}

async function createOffer(input: GetApplicantInput) {
  let application = await prisma.jobApplication.findUnique({
    where: {
      id: input.id,
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  application = await prisma.jobApplication.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'OFFER',
    },
  });

  const newOffer = await prisma.offer.create({
    data: {
      applicantId: application.applicantId,
      companyId: application.companyId,
      jobPostId: application.jobPostId,
      description: 'Interview invitation',
      deadline: new Date(),
      status: 'PENDING',
      jobApplicationId: application.id,
    },
  });
}

async function createInterview(input: GetApplicantInput) {
  let application = await prisma.jobApplication.findUnique({
    where: {
      id: input.id,
    },
  });

  if (application === null) {
    throw new GraphQLError(
      `Fail to save applicant with id : ${'input.applicantId'}`,
    );
  }

  application = await prisma.jobApplication.update({
    where: {
      id: input.id,
    },
    data: {
      status: 'OFFER',
    },
  });

  const newOffer = await prisma.offer.create({
    data: {
      applicantId: application.applicantId,
      companyId: application.companyId,
      jobPostId: application.jobPostId,
      description: 'Interview invitation',
      deadline: new Date(),
      status: 'PENDING',
      jobApplicationId: application.id,
    },
  });
}

const account = {
  getCompanies,
  getSavedApplicants,
  saveApplicant,
  getCompanyAccount,
  acceptApplicationAndCreateInterview,
  acceptInterviewAndCreateOffer,
};

export default account;
