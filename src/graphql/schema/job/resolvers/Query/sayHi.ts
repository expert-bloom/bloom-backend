import type { QueryResolvers } from './../../../types.generated';

export const sayHi: NonNullable<QueryResolvers['sayHi']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.sayHi resolver logic here */

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `this is a test ${_arg?.input ?? '-'}`;
};
