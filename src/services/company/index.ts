import prisma from '@/lib/prisma';
import {
  GetApplicantInput,
  GetSavedApplicantInput,
  SaveApplicantInput,
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

const account = {
  getCompanies,
  getSavedApplicants,
  saveApplicant,
  getCompanyAccount,
};

export default account;
