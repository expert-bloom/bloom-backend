import express from 'express';
import logger from 'morgan';

import authRouter from '@/routes/auth';
import { yoga } from '@/routes/graphql';

import cookieParser from 'cookie-parser';

const signingKey = process.env.JWT_SECRET;

export const app = express();

app.use(logger('dev'));
app.use(cookieParser(signingKey));

// app.use(
//   cookieSession({
//     name: 'session',
//     keys: [signingKey],
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//   }),
// );

app.use('/auth', authRouter);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use(yoga.graphqlEndpoint, yoga);

app.listen(4000, () => {
  console.log(
    `Running a GraphQL API server at ${process.env.DOMAIN}:4000/graphql`,
  );
});
