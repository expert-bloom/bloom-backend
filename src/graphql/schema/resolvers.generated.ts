/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Account } from './account/resolvers/Account';
import    { AccountPayload } from './account/resolvers/AccountPayload';
import    { Affiliate } from './affiliate/resolvers/Affiliate';
import    { AffiliateLight } from './affiliate/resolvers/AffiliateLight';
import    { Applicant } from './applicant/resolvers/Applicant';
import    { ApplicantLight } from './applicant/resolvers/ApplicantLight';
import    { AuthPayload } from './auth/resolvers/AuthPayload';
import    { Company } from './company/resolvers/Company';
import    { CompanyLight } from './company/resolvers/CompanyLight';
import    { Error } from './base/resolvers/Error';
import    { FindOnePayload } from './auth/resolvers/FindOnePayload';
import    { JobPost } from './job/resolvers/JobPost';
import    { JobPostPayload } from './job/resolvers/JobPostPayload';
import    { createJobPost as Mutation_createJobPost } from './job/resolvers/Mutation/createJobPost';
import    { logIn as Mutation_logIn } from './auth/resolvers/Mutation/logIn';
import    { logInOAuth as Mutation_logInOAuth } from './auth/resolvers/Mutation/logInOAuth';
import    { sayHi as Mutation_sayHi } from './job/resolvers/Mutation/sayHi';
import    { signUp as Mutation_signUp } from './auth/resolvers/Mutation/signUp';
import    { signUpOAuth as Mutation_signUpOAuth } from './auth/resolvers/Mutation/signUpOAuth';
import    { OAuth } from './auth/resolvers/OAuth';
import    { findAccount as Query_findAccount } from './account/resolvers/Query/findAccount';
import    { getCompanies as Query_getCompanies } from './company/resolvers/Query/getCompanies';
import    { getJobPosts as Query_getJobPosts } from './job/resolvers/Query/getJobPosts';
import    { me as Query_me } from './account/resolvers/Query/me';
import    { sayHi as Query_sayHi } from './job/resolvers/Query/sayHi';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { findAccount: Query_findAccount,getCompanies: Query_getCompanies,getJobPosts: Query_getJobPosts,me: Query_me,sayHi: Query_sayHi },
      Mutation: { createJobPost: Mutation_createJobPost,logIn: Mutation_logIn,logInOAuth: Mutation_logInOAuth,sayHi: Mutation_sayHi,signUp: Mutation_signUp,signUpOAuth: Mutation_signUpOAuth },
      
      Account: Account,
AccountPayload: AccountPayload,
Affiliate: Affiliate,
AffiliateLight: AffiliateLight,
Applicant: Applicant,
ApplicantLight: ApplicantLight,
AuthPayload: AuthPayload,
Company: Company,
CompanyLight: CompanyLight,
Error: Error,
FindOnePayload: FindOnePayload,
JobPost: JobPost,
JobPostPayload: JobPostPayload,
OAuth: OAuth,
DateTime: DateTimeResolver
    }