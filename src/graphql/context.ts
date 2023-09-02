import type { YogaInitialContext } from 'graphql-yoga';
import service from 'src/services';
import prisma from '@/lib/prisma';

export interface GraphqlContext extends YogaInitialContext {
  service: typeof service;
  me: object | null;
  prisma: typeof prisma;
}

// const pubSub = createPubSub<any>();

export function createContext(initialCtx: YogaInitialContext): GraphqlContext {
  // const i = await prisma.user.count({});
  // console.log('createContext called  ----------> ', i);
  return {
    me: null,
    service,
    prisma,
    ...initialCtx,
  };
}
