import {
  type AuthPayload,
  type LoginInput,
  type SignUpCompanyInput,
  type SignUpFreelancerInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';
import { comparePassword, hashPassword } from '@/util/helper';

async function signUpCompany(input: SignUpCompanyInput): Promise<AuthPayload> {
  const { firstName, lastName, companyName, country, password, email, phone } =
    input;

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
      phone,
      firstName,
      lastName,
      password: hashedPassword,
      country,
      accountType: 'COMPANY',
      isVerified: true,
      userName: companyName,

      company: {
        create: {
          companyName,
          logo: '',
        },
      },
    },
    include: {
      company: true,
    },
  });

  console.log('createdUser with ---> ', newCompany);

  return {
    errors: [],
    account: newCompany,
  };
}

async function signUpFreelancer(
  input: SignUpFreelancerInput,
): Promise<AuthPayload> {
  const { firstName, lastName, country, password, email, phone, gender } =
    input;

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
  const newApplicant = await prisma.account.create({
    data: {
      email,
      phone,
      firstName,
      lastName,
      password: hashedPassword,
      country,
      accountType: 'APPLICANT',
      isVerified: true,
      userName: firstName,

      applicant: {
        create: {
          experienceYear: 0,
          gender,
        },
      },
    },
    include: {
      applicant: true,
    },
  });

  console.log('createdApplicant with ---> ', newApplicant);

  return {
    errors: [],
    account: newApplicant,
  };
}

async function logIn(input: LoginInput): Promise<AuthPayload> {
  const { email, password } = input;

  const account = await prisma.account.findUnique({
    where: { email },
    include: {
      applicant: true,
      company: true,
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
      user: account.applicant,
    },
  };
}

export default {
  signUpCompany,
  signUpFreelancer,
  logIn,
};
