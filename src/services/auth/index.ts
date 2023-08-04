import {
  type AuthPayload,
  type LoginInput,
  type SignUpCompanyInput,
  type SignUpFreelancerInput,
} from '@/graphql/schema/types.generated';
import Company, { type ICompany } from '@/models/Company';
import Account, { type IAccount } from '@/models/Account';
import { DiscCompany, DiscFreelancer } from '@/models/Account/discriminators';
import Applicant, { type IApplicant } from '@/models/Applicant';

async function signUpCompany(input: SignUpCompanyInput): Promise<AuthPayload> {
  const { firstName, lastName, companyName, country, password, email, phone } =
    input;

  const ifExist = await Account.findOne({ email });

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

  const company: ICompany = {
    companyName,
    employee: [],
    jobPost: [],
    logo: '',
  };
  const newCompany = await Company.create(company);

  console.log('created Company ---> ', newCompany);

  const newUser: IAccount = {
    accountType: 'COMPANY',
    gender: 'OTHER',
    firstName,
    phone,
    lastName,
    email,
    password,
    address: {
      country,
    },
    company: newCompany._id,
  };

  const companyAccount = await DiscCompany.create(newUser);

  const companyPjo = companyAccount.toObject({
    flattenObjectIds: true,
  });

  console.log('createdUser with DISC ---> ', companyAccount, newCompany);

  return {
    errors: [],
    account: {
      ...companyPjo,
      id: companyPjo._id as unknown as string,
      company: {
        id: newCompany._id as unknown as string,
        logo: newCompany.logo,
        companyName: newCompany.companyName,
      },
      user: null,
    },
  };
}

async function signUpFreelancer(
  input: SignUpFreelancerInput,
): Promise<AuthPayload> {
  const { firstName, lastName, country, password, email, phone } = input;

  const ifExist = await Account.findOne({ email });

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

  const applicant: IApplicant = {
    experienceYear: 0,
    jobApplication: [],
    savedJobs: [],
  };
  const newApplicant = await Applicant.create(applicant);

  const applicantPjo = newApplicant.toObject({
    flattenObjectIds: true,
  });

  console.log('created applicant ---> ', newApplicant);

  const newUser: IAccount = {
    accountType: 'APPLICANT',
    gender: 'OTHER',
    firstName,
    phone,
    lastName,
    email,
    password,
    address: {
      country,
    },
    applicant: newApplicant._id,
  };

  const applicantAccount = await DiscFreelancer.create(newUser);

  const pjo = applicantAccount.toObject({
    flattenObjectIds: true,
  });

  console.log('createdUser with DISC ---> ', applicantAccount, newApplicant);

  return {
    errors: [],
    account: {
      ...pjo,
      id: pjo._id as unknown as string,
      user: {
        id: applicantPjo._id as unknown as string,
        experienceYear: applicantPjo.experienceYear,
        resume: applicantPjo.resume,
        savedJobs: applicantPjo.savedJobs as unknown as string[],
      },
      company: null,
    },
  };
}

async function logIn(input: LoginInput): Promise<AuthPayload> {
  const { email, password } = input;

  const account = await Account.findOne({ email })
    .populate(['company', 'applicant'])
    .exec();

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

  console.log('login User ---> ', account);

  const isMatch = await account.comparePassword(password);

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

  const accountPjo = account.toObject({
    flattenObjectIds: true,
  });

  console.log('account pjo : ', accountPjo);

  if (account.role === 'TypeCompany') {
    return {
      errors: [],
      account: {
        ...accountPjo,
        id: accountPjo._id as unknown as string,
        company: {
          ...(accountPjo.company as unknown as ICompany),
          id: accountPjo.company._id as unknown as string,
        },
      },
    };
  }

  if (account.role === 'TypeApplicant') {
    return {
      errors: [],
      account: {
        ...accountPjo,
        id: accountPjo._id as unknown as string,
        company: null,
        user: {
          ...(accountPjo.applicant as unknown as IApplicant),
          id: accountPjo.applicant._id as unknown as string,
        },
      },
    };
  }

  if (account.role === 'TypeCompany') {
    return {
      errors: [],
      account: {
        ...accountPjo,
        id: accountPjo._id as unknown as string,
        user: null,
        company: {
          ...(accountPjo.company as unknown as ICompany),
          id: accountPjo.company._id as unknown as string,
        },
      },
    };
  }

  return {
    errors: [
      {
        message: 'Error while login',
      },
    ],
  };
}

export default {
  signUpCompany,
  signUpFreelancer,
  logIn,
};
