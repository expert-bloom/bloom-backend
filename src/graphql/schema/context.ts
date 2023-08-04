import type { YogaInitialContext } from 'graphql-yoga';
import service from 'src/services';

export interface GraphqlContext extends YogaInitialContext {
  service: typeof service;
}

// const pubSub = createPubSub<any>();

export function createContext(initialCtx: YogaInitialContext): GraphqlContext {
  // const i = await prisma.user.count({});
  // console.log('createContext called  ----------> ', i);
  return {
    service,
    ...initialCtx,
  };
}
