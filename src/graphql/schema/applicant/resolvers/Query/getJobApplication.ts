import type { QueryResolvers } from './../../../types.generated';

export const getJobApplication: NonNullable<QueryResolvers['getJobApplication']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.jwt?.id) {
    return null;
  }

  return await _ctx.service.Applicant.getJobApplication({
    applicantId: _ctx.jwt?.id,
    ..._arg.input,
  });
};
