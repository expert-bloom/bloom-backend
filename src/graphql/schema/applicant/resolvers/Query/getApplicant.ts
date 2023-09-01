import type { QueryResolvers } from './../../../types.generated';

export const getApplicant: NonNullable<QueryResolvers['getApplicant']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const applicant = await _ctx.service.Applicant.getApplicant(_arg.input);

  console.log('get applicant resolver : ', applicant);

  if (applicant === null) {
    return null;
  }

  return {
    ...applicant,
    // savedJobs: null as any, // left for nested resolver,
    // workExperience: [], // left for nested resolver,
  };
};
