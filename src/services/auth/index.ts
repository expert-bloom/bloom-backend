import {
  type AuthPayload,
  type LoginInput,
  type OAuthSignUpInput,
  type SignUpInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';
import { comparePassword, hashPassword } from '@/util/helper';

async function signUp(input: SignUpInput): Promise<AuthPayload> {
  const { firstName, lastName, country, password, email, accountType } = input;

  const ifExist = await prisma.account.findUnique({
    where: {
      email,
    },
  });

  if (ifExist != null) {
    return {
      errors: [
        {
          message: 'Account already exist',
        },
      ],
      account: null,
    };
  }

  const hashedPassword = await hashPassword(password);
  const newCompany = await prisma.account.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
      country,
      accountType,
      isVerified: true,

      ...(accountType === 'COMPANY'
        ? {
            company: {
              create: {},
            },
          }
        : accountType === 'APPLICANT'
        ? {
            applicant: {
              create: {},
            },
          }
        : accountType === 'AFFILIATE'
        ? {
            affiliate: {
              create: {},
            },
          }
        : {}),
    },
    include: {
      company: true,
      applicant: true,
      affiliate: true,
    },
  });

  // console.log('createdUser with ---> ', newCompany);

  return {
    errors: [],
    account: newCompany,
  };
}

async function signUpOAuth(input: OAuthSignUpInput): Promise<AuthPayload> {
  const { accountType } = input.account;

  const newCompany = await prisma.account.create({
    data: {
      ...input.account,
      accountType,
      password: '-',
      isVerified: true,
      OAuthClient: {
        create: {
          ...input.OAuth,
        },
      },
      ...(accountType === 'COMPANY'
        ? {
            company: {
              create: {},
            },
          }
        : accountType === 'APPLICANT'
        ? {
            applicant: {
              create: {},
            },
          }
        : accountType === 'AFFILIATE'
        ? {
            affiliate: {
              create: {},
            },
          }
        : {}),
    },
    include: {
      company: true,
      applicant: true,
      affiliate: true,
    },
  });

  console.log('createdUser with ---> ', newCompany);

  return {
    errors: [],
    account: newCompany,
  };
}

async function logIn(input: LoginInput): Promise<AuthPayload> {
  const { email, password } = input;

  const account = await prisma.account.findUnique({
    where: { email },
    include: {
      applicant: true,
      company: true,
      affiliate: true,
      OAuthClient: true,
    },
  });

  if (account == null) {
    return {
      errors: [
        {
          message: 'Account Not Found!',
        },
      ],
      account: null,
    };
  }

  if (account.OAuthClient.length > 0) {
    return {
      errors: [
        {
          message:
            'This account created with social link, please login with your social link',
        },
      ],
      account: null,
    };
  }

  const isMatch = await comparePassword(password, account.password);
  if (!isMatch) {
    return {
      errors: [
        {
          message: 'Invalid email or password',
        },
      ],
      account: null,
    };
  }

  console.log('login with ---> ', account);

  return {
    errors: [],
    account: {
      ...account,
    },
  };
}

export default {
  signUp,
  signUpOAuth,
  logIn,
};
