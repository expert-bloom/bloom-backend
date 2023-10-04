import type { MutationResolvers } from './../../../types.generated';

export const EditJobPost: NonNullable<
  MutationResolvers['EditJobPost']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.service.Job.editJobPost(_arg.input);
};
