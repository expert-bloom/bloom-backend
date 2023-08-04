import type { MutationResolvers } from './../../../types.generated';

export const signUpFreelancer: NonNullable<
  MutationResolvers['signUpFreelancer']
> = async (_parent, { input }, { service }) => {
  return await service.Auth.signUpFreelancer(input);
};
