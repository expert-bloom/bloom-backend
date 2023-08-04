import type { QueryResolvers } from './../../../types.generated';

export const sayHi: NonNullable<QueryResolvers['sayHi']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.sayHi resolver logic here */

  return 'this is a test';
};
