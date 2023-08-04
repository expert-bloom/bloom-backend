import type { MutationResolvers } from './../../../types.generated';
import { GraphQLError } from 'graphql/error';

export const createJobPost: NonNullable<
  MutationResolvers['createJobPost']
> = async (_parent, _arg, { service }) => {
  try {
    console.log('create job post -----> ');

    const newJobPost = await service.Job.createJobPost(_arg.input);
    console.log('createJobPost');

    return newJobPost;
  } catch (err) {
    throw new GraphQLError(err as any);
  }
};
