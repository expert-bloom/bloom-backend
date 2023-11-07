/* eslint-disable @typescript-eslint/restrict-template-expressions */
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
      fullName: firstName + ' ' + lastName,
      lastName,
      password: hashedPassword,
      country,
      accountType,
      isVerified: false,
      userName: firstName,
      image: `${process.env.NEXT_PUBLIC_S3_CLOUD_FRONT_URL}/logo.png`,

      ...(accountType === 'COMPANY'
        ? {
            company: {
              create: {
                companyName: input?.companyName ?? firstName,
              },
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
      oAuthClient: true,
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
      image:
        input.account.image ??
        `${process.env.NEXT_PUBLIC_S3_CLOUD_FRONT_URL}/logo.png`,
      accountType,
      fullName: input.account.firstName + ' ' + input.account.lastName,
      emailVerified: new Date(),
      password: '-',
      isVerified: true,
      oAuthClient: {
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
      oAuthClient: true,
    },
  });

  console.log('createdUser with ---> ', newCompany);

  return {
    errors: [],
    account: newCompany,
  };
}

async function logIn(input: LoginInput) {
  const { email, password } = input;

  const account = await prisma.account.findUnique({
    where: { email },
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
          message: 'Account Not Found!',
        },
      ],
      account: null,
    };
  }

  if (account.oAuthClient.length > 0) {
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

  // DONT-PUSH: Commented for testing
  // const isMatch = await comparePassword(password, account.password);
  const isMatch = password === account.password;
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

  // console.log('login with ---> ', account);

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
