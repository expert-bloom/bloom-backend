import type { QueryResolvers } from './../../../types.generated';

export const getCurrentUser: NonNullable<QueryResolvers['getCurrentUser']> = async (_parent, _arg, _ctx) => {
  // return null;
  // console.log('me ctx : ', _ctx);


  return _ctx.service.Account.getMe();
};
