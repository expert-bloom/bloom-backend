/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Account } from './account/resolvers/Account';
import    { AccountPayload } from './account/resolvers/AccountPayload';
import    { AccountUpdate } from './account/resolvers/AccountUpdate';
import    { Affiliate } from './affiliate/resolvers/Affiliate';
import    { AffiliateLight } from './affiliate/resolvers/AffiliateLight';
import    { Applicant } from './applicant/resolvers/Applicant';
import    { ApplicantAccountConnections } from './applicant/resolvers/ApplicantAccountConnections';
import    { ApplicantAccountEdge } from './applicant/resolvers/ApplicantAccountEdge';
import    { ApplicantAppliedJobPostEdge } from './applicant/resolvers/ApplicantAppliedJobPostEdge';
import    { ApplicantConnection } from './applicant/resolvers/ApplicantConnection';
import    { ApplicantEdge } from './applicant/resolvers/ApplicantEdge';
import    { ApplicantSavedJobPostConnections } from './applicant/resolvers/ApplicantSavedJobPostConnections';
import    { ApplicantSavedJobPostEdge } from './applicant/resolvers/ApplicantSavedJobPostEdge';
import    { Application } from './job/resolvers/Application';
import    { ApplicationConnections } from './applicant/resolvers/ApplicationConnections';
import    { ApplicationEdge } from './applicant/resolvers/ApplicationEdge';
import    { AuthAccountPayload } from './auth/resolvers/AuthAccountPayload';
import    { AuthApplicant } from './auth/resolvers/AuthApplicant';
import    { AuthPayload } from './auth/resolvers/AuthPayload';
import    { Company } from './company/resolvers/Company';
import    { CompanyJobPostsResponse } from './company/resolvers/CompanyJobPostsResponse';
import    { CreateApplicationPayload } from './applicant/resolvers/CreateApplicationPayload';
import    { Error } from './base/resolvers/Error';
import    { FindOnePayload } from './auth/resolvers/FindOnePayload';
import    { Interview } from './job/resolvers/Interview';
import    { JobPost } from './job/resolvers/JobPost';
import    { JobPostResponse } from './company/resolvers/JobPostResponse';
import    { applicantProfileUpdate as Mutation_applicantProfileUpdate } from './applicant/resolvers/Mutation/applicantProfileUpdate';
import    { createApplication as Mutation_createApplication } from './applicant/resolvers/Mutation/createApplication';
import    { createJobPost as Mutation_createJobPost } from './company/resolvers/Mutation/createJobPost';
import    { editJobPost as Mutation_editJobPost } from './company/resolvers/Mutation/editJobPost';
import    { logIn as Mutation_logIn } from './auth/resolvers/Mutation/logIn';
import    { offerApplicant as Mutation_offerApplicant } from './company/resolvers/Mutation/offerApplicant';
import    { profileUpdate as Mutation_profileUpdate } from './account/resolvers/Mutation/profileUpdate';
import    { respondInterview as Mutation_respondInterview } from './applicant/resolvers/Mutation/respondInterview';
import    { respondToOffer as Mutation_respondToOffer } from './applicant/resolvers/Mutation/respondToOffer';
import    { saveApplicant as Mutation_saveApplicant } from './company/resolvers/Mutation/saveApplicant';
import    { saveJobPost as Mutation_saveJobPost } from './job/resolvers/Mutation/saveJobPost';
import    { sayHi as Mutation_sayHi } from './job/resolvers/Mutation/sayHi';
import    { sendInterviewRequest as Mutation_sendInterviewRequest } from './company/resolvers/Mutation/sendInterviewRequest';
import    { signUp as Mutation_signUp } from './auth/resolvers/Mutation/signUp';
import    { signUpOAuth as Mutation_signUpOAuth } from './auth/resolvers/Mutation/signUpOAuth';
import    { OAuth } from './auth/resolvers/OAuth';
import    { Offer } from './job/resolvers/Offer';
import    { PageInfo } from './applicant/resolvers/PageInfo';
import    { findAccount as Query_findAccount } from './account/resolvers/Query/findAccount';
import    { getApplicant as Query_getApplicant } from './applicant/resolvers/Query/getApplicant';
import    { getApplicants as Query_getApplicants } from './applicant/resolvers/Query/getApplicants';
import    { getCompanies as Query_getCompanies } from './company/resolvers/Query/getCompanies';
import    { getCompanyJobPosts as Query_getCompanyJobPosts } from './company/resolvers/Query/getCompanyJobPosts';
import    { getJobApplications as Query_getJobApplications } from './applicant/resolvers/Query/getJobApplications';
import    { getJobPost as Query_getJobPost } from './job/resolvers/Query/getJobPost';
import    { getJobPosts as Query_getJobPosts } from './job/resolvers/Query/getJobPosts';
import    { getSavedApplicant as Query_getSavedApplicant } from './company/resolvers/Query/getSavedApplicant';
import    { getSavedJobPosts as Query_getSavedJobPosts } from './job/resolvers/Query/getSavedJobPosts';
import    { me as Query_me } from './account/resolvers/Query/me';
import    { sayHi as Query_sayHi } from './job/resolvers/Query/sayHi';
import    { WorkExperience } from './applicant/resolvers/WorkExperience';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { findAccount: Query_findAccount,getApplicant: Query_getApplicant,getApplicants: Query_getApplicants,getCompanies: Query_getCompanies,getCompanyJobPosts: Query_getCompanyJobPosts,getJobApplications: Query_getJobApplications,getJobPost: Query_getJobPost,getJobPosts: Query_getJobPosts,getSavedApplicant: Query_getSavedApplicant,getSavedJobPosts: Query_getSavedJobPosts,me: Query_me,sayHi: Query_sayHi },
      Mutation: { applicantProfileUpdate: Mutation_applicantProfileUpdate,createApplication: Mutation_createApplication,createJobPost: Mutation_createJobPost,editJobPost: Mutation_editJobPost,logIn: Mutation_logIn,offerApplicant: Mutation_offerApplicant,profileUpdate: Mutation_profileUpdate,respondInterview: Mutation_respondInterview,respondToOffer: Mutation_respondToOffer,saveApplicant: Mutation_saveApplicant,saveJobPost: Mutation_saveJobPost,sayHi: Mutation_sayHi,sendInterviewRequest: Mutation_sendInterviewRequest,signUp: Mutation_signUp,signUpOAuth: Mutation_signUpOAuth },
      
      Account: Account,
AccountPayload: AccountPayload,
AccountUpdate: AccountUpdate,
Affiliate: Affiliate,
AffiliateLight: AffiliateLight,
Applicant: Applicant,
ApplicantAccountConnections: ApplicantAccountConnections,
ApplicantAccountEdge: ApplicantAccountEdge,
ApplicantAppliedJobPostEdge: ApplicantAppliedJobPostEdge,
ApplicantConnection: ApplicantConnection,
ApplicantEdge: ApplicantEdge,
ApplicantSavedJobPostConnections: ApplicantSavedJobPostConnections,
ApplicantSavedJobPostEdge: ApplicantSavedJobPostEdge,
Application: Application,
ApplicationConnections: ApplicationConnections,
ApplicationEdge: ApplicationEdge,
AuthAccountPayload: AuthAccountPayload,
AuthApplicant: AuthApplicant,
AuthPayload: AuthPayload,
Company: Company,
CompanyJobPostsResponse: CompanyJobPostsResponse,
CreateApplicationPayload: CreateApplicationPayload,
Error: Error,
FindOnePayload: FindOnePayload,
Interview: Interview,
JobPost: JobPost,
JobPostResponse: JobPostResponse,
OAuth: OAuth,
Offer: Offer,
PageInfo: PageInfo,
WorkExperience: WorkExperience,
DateTime: DateTimeResolver
    }