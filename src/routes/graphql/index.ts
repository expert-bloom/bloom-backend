import express from 'express';
import prisma from '@/lib/prisma';
import { createSchema, createYoga, useLogger } from 'graphql-yoga';
import { createContext, type GraphqlContext } from '@/graphql/context';
import { useCookies } from '@whatwg-node/server-plugin-cookies';
import { useJWT } from '@graphql-yoga/plugin-jwt';
import { applyMiddleware } from 'graphql-middleware';
import { typeDefs } from '@/graphql/schema/typeDefs.generated';
import { resolvers } from '@/graphql/schema/resolvers.generated';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';

const router = express.Router();

const signingKey = process.env.JWT_SECRET;
const domain = process.env.DOMAIN ?? '-';

prisma
  .$connect()
  .then(() => {
    console.log('  🥁 prisma connected');
  })
  .catch((err) => {
    console.log('  🔻 prisma error', err);
    process.exit(1);
    throw err;
  });

const schema = createSchema<GraphqlContext>({
  typeDefs,
  resolvers,
});

const schemaWithMiddleWare = applyMiddleware<any, GraphqlContext>(schema);

export const yoga = createYoga({
  context: async (initialContext) => createContext(initialContext),

  graphqlEndpoint: '/graphql', // schema: schemaWithMiddleWare,
  // logging: true,
  schema: schemaWithMiddleWare,
  graphiql: process.env.NODE_ENV === 'development', // cors: {
  //   origin: ['http://localhost:3000', 'https://studio.apollographql.com'], // allowedHeaders: ['Content-Type', 'x-graphql-yoga-csrf'],
  //   credentials: true,
  // },
  plugins: [
    useLogger({
      logFn: (eventName, args) => {
        // Event could be execute-start / execute-end / subscribe-start / subscribe-end / etc.
        // args will include the arguments passed to execute/subscribe (in case of "start" event) and additional result in case of "end" event.
        // console.log(eventName, 'Args : ', args?.result?.data ?? {});
        console.log(eventName, 'operationName : ', args?.args?.operationName);
        console.log(eventName, 'variableValues : ', args?.args?.variableValues);
        console.log(eventName, 'Results Data : ', args?.result?.data ?? {});
      },
    }),
    useResponseCache({
      // global cache
      session: (request) => request.headers.get('authentication'), // ttl: 60,
    }),
    useCookies(),
    useJWT({
      issuer: domain,
      algorithms: ['HS256'],
      signingKey,
      getToken: async ({ request, serverContext }) => {
        const jwtToken = await request.cookieStore
          ?.get('authorization')
          .then((res) => res?.value ?? undefined);
        // console.log('jwtToken: ',  token);
        console.log('jwtToken ------ : ', jwtToken);

        return jwtToken;
      },
    }),
  ],
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.use('/', yoga);

export default router;
