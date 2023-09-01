import type { QueryResolvers } from './../../../types.generated';

export const getApplicants: NonNullable<
  QueryResolvers['getApplicants']
> = async (_parent, _arg, _ctx) => {
  const applicants = await _ctx.service.Applicant.getAllApplicants(_arg.input);

  return {
    pageInfo: {
      hasNextPage: !!applicants[0]._count,
      hasPreviousPage: false,
    },

    edges: applicants.map((ap) => ({
      cursor: ap.id,
      node: { ...ap },
    })),
  };
};
