import type { CompanyResolvers } from './../../types.generated';
import { GraphQLError } from 'graphql/error';

export const Company: CompanyResolvers = {
  /* Implement Company resolver logic here */
  account: async (parent, args, context) => {
    // console.log('account resolver parent : ', parent);

    const company = await context.service.Company.getCompanyAccount({
      id: parent.id as string,
    });

    if (company === null) {
      throw new GraphQLError(
        `account cant be null for a given applicant : ${parent.id}`,
      );
    }

    return company;
  },

  savedApplicants: async (parent, args, context) => {
    // console.log('savedApplicants resolver parent  : ', parent);

    return await context.service.Company.getSavedApplicants({
      companyId: parent.id as string,
    });
  },
    companyName: () => { /* Company.companyName resolver is required because Company.companyName exists but CompanyMapper.companyName does not */ },
    logo: () => { /* Company.logo resolver is required because Company.logo exists but CompanyMapper.logo does not */ }
};
