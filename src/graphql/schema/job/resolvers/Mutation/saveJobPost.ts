import type { MutationResolvers } from './../../../types.generated';

export const saveJobPost: NonNullable<
  MutationResolvers['saveJobPost']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Job.saveJobPost(_arg.input);
};
