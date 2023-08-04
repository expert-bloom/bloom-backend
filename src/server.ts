import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import type { GraphqlContext } from './graphql/context';
import { createContext } from './graphql/context';
import { typeDefs } from '@/graphql/schema/typeDefs.generated';
import { resolvers } from '@/graphql/schema/resolvers.generated';
import { applyMiddleware } from 'graphql-middleware';
import mongoose from '@/lib/mongoose';

export const schema = createSchema<GraphqlContext>({
  typeDefs,
  resolvers,
});

const schemaWithMiddleWare = applyMiddleware<any, GraphqlContext>(schema);

if (process.env.NODE_ENV === 'development') {
}

void mongoose();


const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema: schemaWithMiddleWare,
  context: async (initialContext) => createContext(initialContext),
  logging: true,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log(`
  🚀 Server ready at: http://localhost:4000`);
});
