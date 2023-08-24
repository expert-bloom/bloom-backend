import type {
  AccountInput,
  FindOnePayload,
  MeInput,
  UpdateProfileInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';

async function findOne(input: AccountInput): Promise<FindOnePayload> {
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
          savedJobs: true,
        },
      },
      company: true,
      affiliate: true,
      oAuthClient: true,
    },
  });

  return account;
}

const clearUndefined = (obj = {}) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

async function updateProfile(input: UpdateProfileInput) {
  // filter out the undefined values from the input.account and also Type it with prisma.account type for the prisma.account.update
  const accountInput = input.account ?? {};
  const applicantInput = input.applicant ?? {};

  // todo fix this any type
  const nonNullAccountInput: any = clearUndefined(accountInput);
  const nonNullApplicantInput: any = clearUndefined(applicantInput);

  const account = await prisma.account.update({
    where: { id: input.accountId },
    data: {
      ...nonNullAccountInput,
      applicant: {
        update: {
          data: {
            ...nonNullApplicantInput,
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
