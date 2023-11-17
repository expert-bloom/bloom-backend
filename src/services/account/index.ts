import type {
  ApplicantProfileUpdateInput,
  FindAccountFilterInput,
  MeInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';
import { clearUndefined } from '@/util/helper';
import { GraphQLError } from 'graphql/error';

async function findOne(input: FindAccountFilterInput) {
  const filteredObj = clearUndefined(input?.accountFilter ?? {});
  const aAuthInputObj = clearUndefined(input.oAuthFilter || {});

  const account = await prisma.account.findUnique({
    where: {
      ...filteredObj,
    },
    include: {
      affiliate: true,
      applicant: true,
      company: true,
      oAuthClient: true,
    },
  });

  console.log('find one  :  ', account, input);

  return {
    errors: [],
    account,
  };
}

async function getMe(input: MeInput) {
  try {
    const account = await prisma.account.findUnique({
      where: { id: input.accountId },
      include: {
        applicant: {
          include: {
            // savedJobs: true,
            workExperience: true,
          },
        },
        company: true,
        affiliate: true,
        oAuthClient: true,
      },
    });

    console.log('account : ', account);

    return account;
  } catch (err: any) {
    console.log('getMe error : ', err);
    throw new GraphQLError(err.message);
  }
}

async function updateProfile(input: ApplicantProfileUpdateInput) {
  // filter out the undefined values from the input.account and also Type it with prisma.account type for the prisma.account.update
  const accountInput = input.account ?? {};
  const applicantInput = input.applicant ?? {};

  // todo fix this any type
  const nonNullAccountInput: any = clearUndefined(accountInput);
  const nonNullApplicantInput: any = clearUndefined(applicantInput);

  const workExperience =
    Boolean(nonNullApplicantInput?.workExperience) &&
    Array.isArray(nonNullApplicantInput.workExperience)
      ? {
          workExperience: {
            deleteMany: {},
            createMany: {
              // where: {},
              data: nonNullApplicantInput.workExperience,
            },
          },
        }
      : {};

  // console.log('workExperience -- : ', JSON.stringify(workExperience, null, 2));

  if (Array.isArray(nonNullApplicantInput?.workExperience)) {
    delete nonNullApplicantInput.workExperience;
  }

  console.log(
    'nonNullApplicantInput : ',
    JSON.stringify(nonNullApplicantInput, null, 2),
  );

  const account = await prisma.account.update({
    where: { id: input.accountId },
    data: {
      ...nonNullAccountInput,
      applicant: {
        update: {
          data: {
            ...nonNullApplicantInput,
            ...workExperience,
          },
        },
      },
    },
    include: {
      applicant: true,
      company: true,
      affiliate: true,
      oAuthClient: true,
    },
  });

  if (account == null) {
    return {
      errors: [
        {
          message: 'Account not found',
        },
      ],
      account: null,
    };
  }

  return {
    errors: [],
    account,
  };
}

const account = {
  findOne,
  getMe,
  updateProfile,
};

export default account;
