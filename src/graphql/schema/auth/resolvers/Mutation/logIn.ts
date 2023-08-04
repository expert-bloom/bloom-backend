import type { MutationResolvers } from './../../../types.generated';

export const logIn: NonNullable<MutationResolvers['logIn']> = async (
  _parent,
  { input },
  { service },
) => {
  return await service.Auth.logIn(input);
};
