import type {
  AccountInput,
  ApplicantProfileUpdateInput,
  MeInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';
import {clearUndefined} from "@/util/helper";

async function findOne(input: AccountInput) {
  // filter out the undefined values
  const filteredInput: any = Object.keys(input).reduce((acc, key) => {
    if (input[key] !== undefined) {
      acc[key] = input[key];
    }
    return acc;
  }, {});

  const account = await prisma.account.findUnique({
    where: {
      ...filteredInput, //
      // OAuthClient: {
      //   every: {
      //     ...input.OAuthAccount,
      //   },
      // },
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

  return account;
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

async function getAccount(input: AccountInput) {
  // filter out the undefined values
  const filteredInput: any = Object.keys(input).reduce((acc, key) => {
    if (input[key] !== undefined) {
      acc[key] = input[key];
    }
    return acc;
  }, {});

  const account = await prisma.account.findUnique({
    where: {
      ...filteredInput,
    },
  });

  // console.log('find one  :  ', account, input);

  return account;
}

async function getApplicantAccount(input: AccountInput) {
  // filter out the undefined values
  const filteredInput: any = Object.keys(input).reduce((acc, key) => {
    if (input[key] !== undefined) {
      acc[key] = input[key];
    }
    return acc;
  }, {});

  const account = await prisma.account.findUnique({
    where: {
      ...filteredInput,
    },
  });

  // console.log('find one  :  ', account, input);

  return account;
}

const account = {
  findOne,
  getMe,
  updateProfile,
  getAccount,
  getApplicantAccount,
};

export default account;
