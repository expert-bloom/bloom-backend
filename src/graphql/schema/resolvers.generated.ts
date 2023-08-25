/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Account } from './account/resolvers/Account';
import    { AccountPayload } from './account/resolvers/AccountPayload';
import    { AccountUpdatePayload } from './account/resolvers/AccountUpdatePayload';
import    { Affiliate } from './affiliate/resolvers/Affiliate';
import    { AffiliateLight } from './affiliate/resolvers/AffiliateLight';
import    { Applicant } from './applicant/resolvers/Applicant';
import    { ApplicantLight } from './applicant/resolvers/ApplicantLight';
import    { AuthAccountPayload } from './auth/resolvers/AuthAccountPayload';
import    { AuthApplicant } from './auth/resolvers/AuthApplicant';
import    { AuthPayload } from './auth/resolvers/AuthPayload';
import    { Company } from './company/resolvers/Company';
import    { CompanyLight } from './company/resolvers/CompanyLight';
import    { Error } from './base/resolvers/Error';
import    { FindOnePayload } from './auth/resolvers/FindOnePayload';
import    { JobPost } from './job/resolvers/JobPost';
import    { JobPostPayload } from './job/resolvers/JobPostPayload';
import    { MeAccountPayload } from './account/resolvers/MeAccountPayload';
import    { createJobPost as Mutation_createJobPost } from './job/resolvers/Mutation/createJobPost';
import    { logIn as Mutation_logIn } from './auth/resolvers/Mutation/logIn';
import    { saveJobPost as Mutation_saveJobPost } from './job/resolvers/Mutation/saveJobPost';
import    { sayHi as Mutation_sayHi } from './job/resolvers/Mutation/sayHi';
import    { signUp as Mutation_signUp } from './auth/resolvers/Mutation/signUp';
import    { signUpOAuth as Mutation_signUpOAuth } from './auth/resolvers/Mutation/signUpOAuth';
import    { updateProfile as Mutation_updateProfile } from './account/resolvers/Mutation/updateProfile';
import    { OAuth } from './auth/resolvers/OAuth';
import    { findAccount as Query_findAccount } from './account/resolvers/Query/findAccount';
import    { getCompanies as Query_getCompanies } from './company/resolvers/Query/getCompanies';
import    { getJobPosts as Query_getJobPosts } from './job/resolvers/Query/getJobPosts';
import    { getSavedJobPosts as Query_getSavedJobPosts } from './job/resolvers/Query/getSavedJobPosts';
import    { me as Query_me } from './account/resolvers/Query/me';
import    { sayHi as Query_sayHi } from './job/resolvers/Query/sayHi';
import    { WorkExperience } from './applicant/resolvers/WorkExperience';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { findAccount: Query_findAccount,getCompanies: Query_getCompanies,getJobPosts: Query_getJobPosts,getSavedJobPosts: Query_getSavedJobPosts,me: Query_me,sayHi: Query_sayHi },
      Mutation: { createJobPost: Mutation_createJobPost,logIn: Mutation_logIn,saveJobPost: Mutation_saveJobPost,sayHi: Mutation_sayHi,signUp: Mutation_signUp,signUpOAuth: Mutation_signUpOAuth,updateProfile: Mutation_updateProfile },
      
      Account: Account,
AccountPayload: AccountPayload,
AccountUpdatePayload: AccountUpdatePayload,
Affiliate: Affiliate,
AffiliateLight: AffiliateLight,
Applicant: Applicant,
ApplicantLight: ApplicantLight,
AuthAccountPayload: AuthAccountPayload,
AuthApplicant: AuthApplicant,
AuthPayload: AuthPayload,
Company: Company,
CompanyLight: CompanyLight,
Error: Error,
FindOnePayload: FindOnePayload,
JobPost: JobPost,
JobPostPayload: JobPostPayload,
MeAccountPayload: MeAccountPayload,
OAuth: OAuth,
WorkExperience: WorkExperience,
DateTime: DateTimeResolver
    }