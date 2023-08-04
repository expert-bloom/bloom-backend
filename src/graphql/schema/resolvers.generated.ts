/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Account } from './account/resolvers/Account';
import    { AuthAccountPayload } from './auth/resolvers/AuthAccountPayload';
import    { AuthPayload } from './auth/resolvers/AuthPayload';
import    { Company } from './company/resolvers/Company';
import    { Error } from './base/resolvers/Error';
import    { Freelancer } from './account/resolvers/Freelancer';
import    { JobPost } from './job/resolvers/JobPost';
import    { createJobPost as Mutation_createJobPost } from './job/resolvers/Mutation/createJobPost';
import    { logIn as Mutation_logIn } from './auth/resolvers/Mutation/logIn';
import    { signUpCompany as Mutation_signUpCompany } from './auth/resolvers/Mutation/signUpCompany';
import    { signUpFreelancer as Mutation_signUpFreelancer } from './auth/resolvers/Mutation/signUpFreelancer';
import    { getJobPosts as Query_getJobPosts } from './job/resolvers/Query/getJobPosts';
import    { me as Query_me } from './account/resolvers/Query/me';
import    { sayHi as Query_sayHi } from './job/resolvers/Query/sayHi';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { getJobPosts: Query_getJobPosts,me: Query_me,sayHi: Query_sayHi },
      Mutation: { createJobPost: Mutation_createJobPost,logIn: Mutation_logIn,signUpCompany: Mutation_signUpCompany,signUpFreelancer: Mutation_signUpFreelancer },
      
      Account: Account,
AuthAccountPayload: AuthAccountPayload,
AuthPayload: AuthPayload,
Company: Company,
Error: Error,
Freelancer: Freelancer,
JobPost: JobPost,
DateTime: DateTimeResolver
    }