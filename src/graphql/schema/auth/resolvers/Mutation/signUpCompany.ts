import type { MutationResolvers } from './../../../types.generated';

export const signUpCompany: NonNullable<
  MutationResolvers['signUpCompany']
> = async (_parent, { input }, { service }) => {
  return await service.Auth.signUpCompany(input);
};
