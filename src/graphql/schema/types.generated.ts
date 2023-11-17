import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApplicantMapper } from './applicant/schema.mappers';
import { ApplicationMapper } from './job/schema.mappers';
import { CompanyMapper } from './company/schema.mappers';
import { GraphqlContext } from 'src/graphql/context';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
};

export type Account = IAccount & {
  accountType: AccountType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type AccountFilterInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type AccountPayload = {
  accountType: AccountType;
  affiliate?: Maybe<AffiliateLight>;
  applicant?: Maybe<Applicant>;
  company?: Maybe<Company>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  oAuthClient: Array<OAuth>;
  phone?: Maybe<Scalars['String']['output']>;
  profileCompleteness: Scalars['Int']['output'];
};

export type AccountSortField =
  /** Sort users by created at. */
  | 'CREATED_AT'
  /** Sort users by email. */
  | 'EMAIL'
  /** Sort users by first name. */
  | 'FIRST_NAME'
  /** Sort users by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort users by last name. */
  | 'LAST_NAME';

export type AccountType =
  | 'AFFILIATE'
  | 'APPLICANT'
  | 'COMPANY';

export type AccountUpdate = PayloadError & {
  account?: Maybe<AccountPayload>;
  errors: Array<Error>;
};

export type AccountUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Affiliate = IAccount & {
  accountType: AccountType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type AffiliateLight = {
  id: Scalars['String']['output'];
};

export type Applicant = Node & {
  WorkExperienceYears?: Maybe<Scalars['Int']['output']>;
  about?: Maybe<Scalars['String']['output']>;
  accomplishment?: Maybe<Scalars['String']['output']>;
  account: Account;
  education?: Maybe<Scalars['String']['output']>;
  englishLevel?: Maybe<EnglishLevel>;
  experienceYear?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  introVideo?: Maybe<Scalars['String']['output']>;
  jobPosition?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  otherLanguages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  portfolio?: Maybe<Scalars['String']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  salaryExpectation?: Maybe<Scalars['Int']['output']>;
  savedJobs?: Maybe<ApplicantSavedJobPostConnections>;
  skillLevel?: Maybe<ExperienceLevel>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  workExperience: Array<WorkExperience>;
};


export type ApplicantsavedJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ApplicantAccountConnections = {
  edges: Array<ApplicantAccountEdge>;
  pageInfo: PageInfo;
};

export type ApplicantAccountEdge = {
  cursor: Scalars['String']['output'];
  node: Account;
};

export type ApplicantAppliedJobPostEdge = {
  cursor: Scalars['String']['output'];
  node: JobPost;
};

export type ApplicantConnection = {
  edges: Array<ApplicantEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ApplicantEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Applicant;
};

export type ApplicantFilter = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ApplicantOrdering = {
  direction: OrderDirection;
  field: AccountSortField;
};

export type ApplicantProfileUpdateInput = {
  account?: InputMaybe<AccountUpdateInput>;
  accountId: Scalars['String']['input'];
  applicant?: InputMaybe<ApplicantUpdateInput>;
};

export type ApplicantSavedJobPostConnections = {
  edges: Array<ApplicantSavedJobPostEdge>;
  pageInfo: PageInfo;
};

export type ApplicantSavedJobPostEdge = {
  cursor: Scalars['String']['output'];
  node: JobPost;
};

export type ApplicantUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  accomplishment?: InputMaybe<Scalars['String']['input']>;
  englishLevel?: InputMaybe<EnglishLevel>;
  experienceYear?: InputMaybe<Scalars['Int']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  introVideo?: InputMaybe<Scalars['String']['input']>;
  jobPosition?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  portfolio?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  salaryExpectation?: InputMaybe<Scalars['Int']['input']>;
  skillLevel?: InputMaybe<ExperienceLevel>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  workExperience?: InputMaybe<Array<WorkExperienceInput>>;
};

export type Application = {
  applicant?: Maybe<Applicant>;
  applicantId: Scalars['String']['output'];
  attachment?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  companyId: Scalars['String']['output'];
  coverLetter: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interview?: Maybe<Interview>;
  jobPost?: Maybe<JobPost>;
  jobPostId: Scalars['String']['output'];
  offer?: Maybe<Offer>;
  phone: Scalars['String']['output'];
  resume: Scalars['String']['output'];
  status: ApplicationStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type ApplicationConnections = {
  edges: Array<ApplicationEdge>;
  pageInfo: PageInfo;
};

export type ApplicationEdge = {
  cursor: Scalars['String']['output'];
  node: Application;
};

export type ApplicationFilter = {
  applicantId?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  jobPostId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatus>;
};

export type ApplicationStatus =
  | 'ACCEPTED'
  | 'INTERVIEW'
  | 'OFFER'
  | 'PENDING'
  | 'REJECTED';

export type AuthAccountPayload = {
  accountType: AccountType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  oAuthClient: Array<OAuth>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type AuthApplicant = {
  experienceYear?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  resume?: Maybe<Scalars['String']['output']>;
};

export type AuthPayload = PayloadError & {
  account?: Maybe<AuthAccountPayload>;
  errors: Array<Error>;
};

export type CacheControlScope =
  | 'PRIVATE'
  | 'PUBLIC';

export type Company = Node & {
  account: Account;
  companyName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  savedApplicants: Array<Applicant>;
};

export type CompanyJobPostsResponse = {
  errors: Array<Error>;
  jobPosts: Array<JobPost>;
};

export type CreateApplicationInput = {
  applicantId: Scalars['String']['input'];
  attachment?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['String']['input'];
  coverLetter: Scalars['String']['input'];
  email: Scalars['String']['input'];
  jobPostId: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  resume: Scalars['String']['input'];
};

export type CreateApplicationPayload = PayloadError & {
  application?: Maybe<Application>;
  errors: Array<Error>;
};

export type CreateJobPostInput = {
  affiliateId?: InputMaybe<Scalars['String']['input']>;
  applicationDeadline: Scalars['DateTime']['input'];
  category: Array<Scalars['String']['input']>;
  companyId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  englishLevel: EnglishLevel;
  experienceLevel: ExperienceLevel;
  interviewQuestions: Array<Scalars['String']['input']>;
  isVisible: Scalars['Boolean']['input'];
  jobExperience: Scalars['Int']['input'];
  jobSite: JobSite;
  jobType: JobType;
  location: Scalars['String']['input'];
  otherLanguages: Array<Scalars['String']['input']>;
  postedBy: Scalars['String']['input'];
  qualifications: Array<Scalars['String']['input']>;
  salary: Array<Scalars['Int']['input']>;
  salaryType: SalaryType;
  skills: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  vacancy: Scalars['Int']['input'];
};

export type EditJobPostFilter = {
  companyId: Scalars['String']['input'];
  jobPostId: Scalars['String']['input'];
};

export type EditJobPostInput = {
  editedData: EditJobPostInputData;
  filter: EditJobPostFilter;
};

export type EditJobPostInputData = {
  applicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  englishLevel?: InputMaybe<EnglishLevel>;
  experienceLevel?: InputMaybe<ExperienceLevel>;
  interviewQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  jobExperience?: InputMaybe<Scalars['Int']['input']>;
  jobSite?: InputMaybe<JobSite>;
  jobType?: InputMaybe<JobType>;
  location?: InputMaybe<Scalars['String']['input']>;
  otherLanguages?: InputMaybe<Array<Scalars['String']['input']>>;
  qualifications?: InputMaybe<Array<Scalars['String']['input']>>;
  salary?: InputMaybe<Array<Scalars['Int']['input']>>;
  salaryType?: InputMaybe<SalaryType>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  vacancy?: InputMaybe<Scalars['Int']['input']>;
};

export type EnglishLevel =
  | 'BASIC'
  | 'CONVERSATIONAL'
  | 'FLUENT'
  | 'NATIVE';

export type Error = {
  message: Scalars['String']['output'];
};

export type ExperienceLevel =
  | 'Beginner'
  | 'Expert'
  | 'Intermediate'
  | 'Junior'
  | 'Senior';

export type FindAccountFilterInput = {
  accountFilter?: InputMaybe<AccountFilterInput>;
  oAuthFilter?: InputMaybe<OAuthAccountFilterInput>;
};

export type FindOnePayload = PayloadError & {
  account?: Maybe<AccountPayload>;
  errors: Array<Error>;
};

export type Gender =
  | 'FEMALE'
  | 'MALE'
  | 'OTHER';

export type GetApplicantInput = {
  id: Scalars['String']['input'];
};

export type GetApplicantsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApplicantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicantOrdering>>;
};

export type GetApplicationFilter = {
  id: Scalars['String']['input'];
  jobPostId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatus>;
};

export type GetApplicationPayload = PayloadError & {
  application?: Maybe<Application>;
  errors: Array<Error>;
};

export type GetCompanyJobPostsInput = {
  companyId: Scalars['String']['input'];
};

export type GetJobApplicationsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicantOrdering>>;
};

export type GetJobPostInput = {
  id: Scalars['String']['input'];
};

export type GetSavedApplicantInput = {
  companyId: Scalars['String']['input'];
};

export type IAccount = {
  accountType: AccountType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type Interview = Node & {
  answerText?: Maybe<Scalars['String']['output']>;
  answerVideo?: Maybe<Scalars['String']['output']>;
  applicantId: Scalars['String']['output'];
  attachment?: Maybe<Scalars['String']['output']>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deadline?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  jobApplicationId?: Maybe<Scalars['String']['output']>;
  jobPostId: Scalars['String']['output'];
  status?: Maybe<InterviewStatus>;
  updatedAt: Scalars['DateTime']['output'];
};

export type InterviewStatus =
  | 'ACCEPTED'
  | 'APPLICANT_REFUSED'
  | 'APPLICANT_RESPONDED'
  | 'PENDING'
  | 'REJECTED';

export type JobPost = Node & {
  applicationDeadline: Scalars['DateTime']['output'];
  category: Array<Scalars['String']['output']>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  englishLevel: EnglishLevel;
  experienceLevel: ExperienceLevel;
  id: Scalars['ID']['output'];
  interviewQuestions: Array<Scalars['String']['output']>;
  isVisible: Scalars['Boolean']['output'];
  jobExperience: Scalars['Int']['output'];
  jobSite: JobSite;
  jobType: JobType;
  location: Scalars['String']['output'];
  otherLanguages: Array<Scalars['String']['output']>;
  qualifications: Array<Scalars['String']['output']>;
  salary: Array<Scalars['Int']['output']>;
  salaryType: SalaryType;
  skills: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vacancy: Scalars['Int']['output'];
};

export type JobPostResponse = {
  errors: Array<Error>;
  jobPost?: Maybe<JobPost>;
};

export type JobSite =
  | 'HYBRID'
  | 'ONSITE'
  | 'REMOTE';

export type JobType =
  | 'CONTRACTUAL'
  | 'FULL_TIME'
  | 'INTERNSHIP'
  | 'PART_TIME';

export type JopPostFilterInput = {
  companyId: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MeInput = {
  accountId: Scalars['String']['input'];
};

export type Mutation = {
  applicantProfileUpdate: AccountUpdate;
  createApplication: CreateApplicationPayload;
  createJobPost: JobPostResponse;
  editJobPost: JobPostResponse;
  logIn: AuthPayload;
  logOut: Scalars['Boolean']['output'];
  offerApplicant?: Maybe<Offer>;
  profileUpdate: AccountUpdate;
  respondInterview?: Maybe<Interview>;
  respondToOffer?: Maybe<Offer>;
  saveApplicant?: Maybe<Scalars['Boolean']['output']>;
  saveJobPost?: Maybe<JobPost>;
  sendEmail?: Maybe<Scalars['Boolean']['output']>;
  sendInterviewRequest?: Maybe<Interview>;
  signUp: AuthPayload;
  signUpOAuth: AuthPayload;
  verifyAccount: VerifyAccountPayload;
};


export type MutationapplicantProfileUpdateArgs = {
  input: ApplicantProfileUpdateInput;
};


export type MutationcreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type MutationcreateJobPostArgs = {
  input: CreateJobPostInput;
};


export type MutationeditJobPostArgs = {
  input: EditJobPostInput;
};


export type MutationlogInArgs = {
  input: LoginInput;
};


export type MutationofferApplicantArgs = {
  input: OfferApplicantInput;
};


export type MutationprofileUpdateArgs = {
  input: UpdateProfileInput;
};


export type MutationrespondInterviewArgs = {
  input: RespondInterviewInput;
};


export type MutationrespondToOfferArgs = {
  input: RespondOfferInput;
};


export type MutationsaveApplicantArgs = {
  input: SaveApplicantInput;
};


export type MutationsaveJobPostArgs = {
  input: SaveJobPostInput;
};


export type MutationsendInterviewRequestArgs = {
  input: SendInterviewRequestInput;
};


export type MutationsignUpArgs = {
  input: SignUpInput;
};


export type MutationsignUpOAuthArgs = {
  input: OAuthSignUpInput;
};


export type MutationverifyAccountArgs = {
  input: VerifyAccountInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type OAuth = {
  accessToken: Scalars['String']['output'];
  expires: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  tokenType: Scalars['String']['output'];
};

export type OAuthAccountFilterInput = {
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type OAuthAccountInput = {
  accountType: AccountType;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type OAuthInput = {
  accessToken: Scalars['String']['input'];
  expires: Scalars['DateTime']['input'];
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  tokenType: Scalars['String']['input'];
};

export type OAuthLoginInput = {
  OAuth: OAuthInput;
  account: SignUpInput;
};

export type OAuthSignUpInput = {
  OAuth: OAuthInput;
  account: OAuthAccountInput;
};

export type Offer = Node & {
  answerText?: Maybe<Scalars['String']['output']>;
  answerVideo?: Maybe<Scalars['String']['output']>;
  applicantId: Scalars['String']['output'];
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deadline?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  jobApplicationId?: Maybe<Scalars['String']['output']>;
  jobPostId: Scalars['String']['output'];
  status?: Maybe<OfferStatus>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OfferApplicantInput = {
  applicantId: Scalars['String']['input'];
  applicationId: Scalars['String']['input'];
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
};

export type OfferStatus =
  | 'ACCEPTED'
  | 'APPLICANT_REFUSED'
  | 'PENDING';

export type OrderDirection =
  /** Specifies an ascending sort order. */
  | 'ASC'
  /** Specifies a descending sort order. */
  | 'DESC';

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PayloadError = {
  errors: Array<Error>;
};

export type Query = {
  findAccount?: Maybe<FindOnePayload>;
  getApplicant?: Maybe<Applicant>;
  getApplicants?: Maybe<ApplicantConnection>;
  getCompanies: Array<Company>;
  getCompanyJobPosts: CompanyJobPostsResponse;
  getJobApplication?: Maybe<Application>;
  getJobApplications: ApplicationConnections;
  getJobPost?: Maybe<JobPost>;
  getJobPosts: Array<JobPost>;
  getSavedApplicant: Array<Applicant>;
  getSavedJobPosts: Array<JobPost>;
  me?: Maybe<AccountPayload>;
  sayHi?: Maybe<Scalars['String']['output']>;
};


export type QueryfindAccountArgs = {
  input: FindAccountFilterInput;
};


export type QuerygetApplicantArgs = {
  input: GetApplicantInput;
};


export type QuerygetApplicantsArgs = {
  input: GetApplicantsInput;
};


export type QuerygetCompanyJobPostsArgs = {
  input: GetCompanyJobPostsInput;
};


export type QuerygetJobApplicationArgs = {
  input: GetApplicationFilter;
};


export type QuerygetJobApplicationsArgs = {
  input: GetJobApplicationsInput;
};


export type QuerygetJobPostArgs = {
  input: GetJobPostInput;
};


export type QuerygetJobPostsArgs = {
  input?: InputMaybe<JopPostFilterInput>;
};


export type QuerygetSavedApplicantArgs = {
  input: GetSavedApplicantInput;
};


export type QuerygetSavedJobPostsArgs = {
  input: SavedJobPostsInput;
};


export type QuerysayHiArgs = {
  input?: InputMaybe<Scalars['String']['input']>;
};

export type RespondInterviewInput = {
  applicantId: Scalars['String']['input'];
  interviewId: Scalars['String']['input'];
  interviewVideoUrl?: InputMaybe<Scalars['String']['input']>;
  refuse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RespondOfferInput = {
  applicantId: Scalars['String']['input'];
  applicationId: Scalars['String']['input'];
  offerId: Scalars['String']['input'];
  refuse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SalaryType =
  | 'HOURLY'
  | 'MONTHLY'
  | 'ONE_TIME'
  | 'YEARLY';

export type SaveApplicantInput = {
  applicantId: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  save?: Scalars['Boolean']['input'];
};

export type SaveJobPostInput = {
  accountId: Scalars['String']['input'];
  jobPostId: Scalars['String']['input'];
  save: Scalars['Boolean']['input'];
};

export type SavedJobPostsInput = {
  accountId: Scalars['String']['input'];
};

export type SendInterviewRequestInput = {
  applicationId: Scalars['String']['input'];
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
};

export type SignUpInput = {
  accountType: AccountType;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UpdateProfileInput = {
  account?: InputMaybe<AccountUpdateInput>;
  accountId: Scalars['String']['input'];
  applicant?: InputMaybe<ApplicantUpdateInput>;
};

export type VerifyAccountInput = {
  token: Scalars['String']['input'];
};

export type VerifyAccountPayload = PayloadError & {
  account?: Maybe<Account>;
  errors: Array<Error>;
};

export type WorkExperience = {
  accomplishment: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  companyWebsite?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  ongoing: Scalars['Boolean']['output'];
  position: Scalars['String']['output'];
  skills: Array<Scalars['String']['output']>;
  startDate: Scalars['DateTime']['output'];
};

export type WorkExperienceInput = {
  accomplishment: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyWebsite?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  ongoing: Scalars['Boolean']['input'];
  position: Scalars['String']['input'];
  skills: Array<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  IAccount: ( Account & { __typename: 'Account' } ) | ( Affiliate & { __typename: 'Affiliate' } );
  Node: ( ApplicantMapper & { __typename: 'Applicant' } ) | ( CompanyMapper & { __typename: 'Company' } ) | ( Interview & { __typename: 'Interview' } ) | ( JobPost & { __typename: 'JobPost' } ) | ( Offer & { __typename: 'Offer' } );
  PayloadError: ( Omit<AccountUpdate, 'account'> & { account: Maybe<RefType['AccountPayload']> } & { __typename: 'AccountUpdate' } ) | ( AuthPayload & { __typename: 'AuthPayload' } ) | ( Omit<CreateApplicationPayload, 'application'> & { application: Maybe<RefType['Application']> } & { __typename: 'CreateApplicationPayload' } ) | ( Omit<FindOnePayload, 'account'> & { account: Maybe<RefType['AccountPayload']> } & { __typename: 'FindOnePayload' } ) | ( Omit<GetApplicationPayload, 'application'> & { application: Maybe<RefType['Application']> } & { __typename: 'GetApplicationPayload' } ) | ( VerifyAccountPayload & { __typename: 'VerifyAccountPayload' } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AccountFilterInput: AccountFilterInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  AccountPayload: ResolverTypeWrapper<Omit<AccountPayload, 'applicant' | 'company'> & { applicant: Maybe<ResolversTypes['Applicant']>, company: Maybe<ResolversTypes['Company']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  AccountSortField: AccountSortField;
  AccountType: AccountType;
  AccountUpdate: ResolverTypeWrapper<Omit<AccountUpdate, 'account'> & { account: Maybe<ResolversTypes['AccountPayload']> }>;
  AccountUpdateInput: AccountUpdateInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateLight: ResolverTypeWrapper<AffiliateLight>;
  Applicant: ResolverTypeWrapper<ApplicantMapper>;
  ApplicantAccountConnections: ResolverTypeWrapper<ApplicantAccountConnections>;
  ApplicantAccountEdge: ResolverTypeWrapper<ApplicantAccountEdge>;
  ApplicantAppliedJobPostEdge: ResolverTypeWrapper<ApplicantAppliedJobPostEdge>;
  ApplicantConnection: ResolverTypeWrapper<Omit<ApplicantConnection, 'edges'> & { edges: Array<ResolversTypes['ApplicantEdge']> }>;
  ApplicantEdge: ResolverTypeWrapper<Omit<ApplicantEdge, 'node'> & { node: ResolversTypes['Applicant'] }>;
  ApplicantFilter: ApplicantFilter;
  ApplicantOrdering: ApplicantOrdering;
  ApplicantProfileUpdateInput: ApplicantProfileUpdateInput;
  ApplicantSavedJobPostConnections: ResolverTypeWrapper<ApplicantSavedJobPostConnections>;
  ApplicantSavedJobPostEdge: ResolverTypeWrapper<ApplicantSavedJobPostEdge>;
  ApplicantUpdateInput: ApplicantUpdateInput;
  Application: ResolverTypeWrapper<ApplicationMapper>;
  ApplicationConnections: ResolverTypeWrapper<Omit<ApplicationConnections, 'edges'> & { edges: Array<ResolversTypes['ApplicationEdge']> }>;
  ApplicationEdge: ResolverTypeWrapper<Omit<ApplicationEdge, 'node'> & { node: ResolversTypes['Application'] }>;
  ApplicationFilter: ApplicationFilter;
  ApplicationStatus: ApplicationStatus;
  AuthAccountPayload: ResolverTypeWrapper<AuthAccountPayload>;
  AuthApplicant: ResolverTypeWrapper<AuthApplicant>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  CacheControlScope: CacheControlScope;
  Company: ResolverTypeWrapper<CompanyMapper>;
  CompanyJobPostsResponse: ResolverTypeWrapper<CompanyJobPostsResponse>;
  CreateApplicationInput: CreateApplicationInput;
  CreateApplicationPayload: ResolverTypeWrapper<Omit<CreateApplicationPayload, 'application'> & { application: Maybe<ResolversTypes['Application']> }>;
  CreateJobPostInput: CreateJobPostInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  EditJobPostFilter: EditJobPostFilter;
  EditJobPostInput: EditJobPostInput;
  EditJobPostInputData: EditJobPostInputData;
  EnglishLevel: EnglishLevel;
  Error: ResolverTypeWrapper<Error>;
  ExperienceLevel: ExperienceLevel;
  FindAccountFilterInput: FindAccountFilterInput;
  FindOnePayload: ResolverTypeWrapper<Omit<FindOnePayload, 'account'> & { account: Maybe<ResolversTypes['AccountPayload']> }>;
  Gender: Gender;
  GetApplicantInput: GetApplicantInput;
  GetApplicantsInput: GetApplicantsInput;
  GetApplicationFilter: GetApplicationFilter;
  GetApplicationPayload: ResolverTypeWrapper<Omit<GetApplicationPayload, 'application'> & { application: Maybe<ResolversTypes['Application']> }>;
  GetCompanyJobPostsInput: GetCompanyJobPostsInput;
  GetJobApplicationsInput: GetJobApplicationsInput;
  GetJobPostInput: GetJobPostInput;
  GetSavedApplicantInput: GetSavedApplicantInput;
  IAccount: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IAccount']>;
  Interview: ResolverTypeWrapper<Interview>;
  InterviewStatus: InterviewStatus;
  JobPost: ResolverTypeWrapper<JobPost>;
  JobPostResponse: ResolverTypeWrapper<JobPostResponse>;
  JobSite: JobSite;
  JobType: JobType;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  MeInput: MeInput;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  OAuth: ResolverTypeWrapper<OAuth>;
  OAuthAccountFilterInput: OAuthAccountFilterInput;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  Offer: ResolverTypeWrapper<Offer>;
  OfferApplicantInput: OfferApplicantInput;
  OfferStatus: OfferStatus;
  OrderDirection: OrderDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PayloadError: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['PayloadError']>;
  Query: ResolverTypeWrapper<{}>;
  RespondInterviewInput: RespondInterviewInput;
  RespondOfferInput: RespondOfferInput;
  SalaryType: SalaryType;
  SaveApplicantInput: SaveApplicantInput;
  SaveJobPostInput: SaveJobPostInput;
  SavedJobPostsInput: SavedJobPostsInput;
  SendInterviewRequestInput: SendInterviewRequestInput;
  SignUpInput: SignUpInput;
  UpdateProfileInput: UpdateProfileInput;
  VerifyAccountInput: VerifyAccountInput;
  VerifyAccountPayload: ResolverTypeWrapper<VerifyAccountPayload>;
  WorkExperience: ResolverTypeWrapper<WorkExperience>;
  WorkExperienceInput: WorkExperienceInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String']['output'];
  AccountFilterInput: AccountFilterInput;
  ID: Scalars['ID']['output'];
  AccountPayload: Omit<AccountPayload, 'applicant' | 'company'> & { applicant: Maybe<ResolversParentTypes['Applicant']>, company: Maybe<ResolversParentTypes['Company']> };
  Int: Scalars['Int']['output'];
  AccountUpdate: Omit<AccountUpdate, 'account'> & { account: Maybe<ResolversParentTypes['AccountPayload']> };
  AccountUpdateInput: AccountUpdateInput;
  Boolean: Scalars['Boolean']['output'];
  Affiliate: Affiliate;
  AffiliateLight: AffiliateLight;
  Applicant: ApplicantMapper;
  ApplicantAccountConnections: ApplicantAccountConnections;
  ApplicantAccountEdge: ApplicantAccountEdge;
  ApplicantAppliedJobPostEdge: ApplicantAppliedJobPostEdge;
  ApplicantConnection: Omit<ApplicantConnection, 'edges'> & { edges: Array<ResolversParentTypes['ApplicantEdge']> };
  ApplicantEdge: Omit<ApplicantEdge, 'node'> & { node: ResolversParentTypes['Applicant'] };
  ApplicantFilter: ApplicantFilter;
  ApplicantOrdering: ApplicantOrdering;
  ApplicantProfileUpdateInput: ApplicantProfileUpdateInput;
  ApplicantSavedJobPostConnections: ApplicantSavedJobPostConnections;
  ApplicantSavedJobPostEdge: ApplicantSavedJobPostEdge;
  ApplicantUpdateInput: ApplicantUpdateInput;
  Application: ApplicationMapper;
  ApplicationConnections: Omit<ApplicationConnections, 'edges'> & { edges: Array<ResolversParentTypes['ApplicationEdge']> };
  ApplicationEdge: Omit<ApplicationEdge, 'node'> & { node: ResolversParentTypes['Application'] };
  ApplicationFilter: ApplicationFilter;
  AuthAccountPayload: AuthAccountPayload;
  AuthApplicant: AuthApplicant;
  AuthPayload: AuthPayload;
  Company: CompanyMapper;
  CompanyJobPostsResponse: CompanyJobPostsResponse;
  CreateApplicationInput: CreateApplicationInput;
  CreateApplicationPayload: Omit<CreateApplicationPayload, 'application'> & { application: Maybe<ResolversParentTypes['Application']> };
  CreateJobPostInput: CreateJobPostInput;
  DateTime: Scalars['DateTime']['output'];
  EditJobPostFilter: EditJobPostFilter;
  EditJobPostInput: EditJobPostInput;
  EditJobPostInputData: EditJobPostInputData;
  Error: Error;
  FindAccountFilterInput: FindAccountFilterInput;
  FindOnePayload: Omit<FindOnePayload, 'account'> & { account: Maybe<ResolversParentTypes['AccountPayload']> };
  GetApplicantInput: GetApplicantInput;
  GetApplicantsInput: GetApplicantsInput;
  GetApplicationFilter: GetApplicationFilter;
  GetApplicationPayload: Omit<GetApplicationPayload, 'application'> & { application: Maybe<ResolversParentTypes['Application']> };
  GetCompanyJobPostsInput: GetCompanyJobPostsInput;
  GetJobApplicationsInput: GetJobApplicationsInput;
  GetJobPostInput: GetJobPostInput;
  GetSavedApplicantInput: GetSavedApplicantInput;
  IAccount: ResolversInterfaceTypes<ResolversParentTypes>['IAccount'];
  Interview: Interview;
  JobPost: JobPost;
  JobPostResponse: JobPostResponse;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  MeInput: MeInput;
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  OAuth: OAuth;
  OAuthAccountFilterInput: OAuthAccountFilterInput;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  Offer: Offer;
  OfferApplicantInput: OfferApplicantInput;
  PageInfo: PageInfo;
  PayloadError: ResolversInterfaceTypes<ResolversParentTypes>['PayloadError'];
  Query: {};
  RespondInterviewInput: RespondInterviewInput;
  RespondOfferInput: RespondOfferInput;
  SaveApplicantInput: SaveApplicantInput;
  SaveJobPostInput: SaveJobPostInput;
  SavedJobPostsInput: SavedJobPostsInput;
  SendInterviewRequestInput: SendInterviewRequestInput;
  SignUpInput: SignUpInput;
  UpdateProfileInput: UpdateProfileInput;
  VerifyAccountInput: VerifyAccountInput;
  VerifyAccountPayload: VerifyAccountPayload;
  WorkExperience: WorkExperience;
  WorkExperienceInput: WorkExperienceInput;
};

export type cacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']['input']>;
  scope?: Maybe<CacheControlScope>;
};

export type cacheControlDirectiveResolver<Result, Parent, ContextType = GraphqlContext, Args = cacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AccountPayload'] = ResolversParentTypes['AccountPayload']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  affiliate?: Resolver<Maybe<ResolversTypes['AffiliateLight']>, ParentType, ContextType>;
  applicant?: Resolver<Maybe<ResolversTypes['Applicant']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oAuthClient?: Resolver<Array<ResolversTypes['OAuth']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileCompleteness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountUpdateResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AccountUpdate'] = ResolversParentTypes['AccountUpdate']> = {
  account?: Resolver<Maybe<ResolversTypes['AccountPayload']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliateResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Affiliate'] = ResolversParentTypes['Affiliate']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliateLightResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AffiliateLight'] = ResolversParentTypes['AffiliateLight']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Applicant'] = ResolversParentTypes['Applicant']> = {
  WorkExperienceYears?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accomplishment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  education?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  englishLevel?: Resolver<Maybe<ResolversTypes['EnglishLevel']>, ParentType, ContextType>;
  experienceYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  github?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  introVideo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  linkedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  portfolio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salaryExpectation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  savedJobs?: Resolver<Maybe<ResolversTypes['ApplicantSavedJobPostConnections']>, ParentType, ContextType, Partial<ApplicantsavedJobsArgs>>;
  skillLevel?: Resolver<Maybe<ResolversTypes['ExperienceLevel']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  workExperience?: Resolver<Array<ResolversTypes['WorkExperience']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantAccountConnectionsResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantAccountConnections'] = ResolversParentTypes['ApplicantAccountConnections']> = {
  edges?: Resolver<Array<ResolversTypes['ApplicantAccountEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantAccountEdgeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantAccountEdge'] = ResolversParentTypes['ApplicantAccountEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantAppliedJobPostEdgeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantAppliedJobPostEdge'] = ResolversParentTypes['ApplicantAppliedJobPostEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['JobPost'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantConnectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantConnection'] = ResolversParentTypes['ApplicantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ApplicantEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantEdgeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantEdge'] = ResolversParentTypes['ApplicantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Applicant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantSavedJobPostConnectionsResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantSavedJobPostConnections'] = ResolversParentTypes['ApplicantSavedJobPostConnections']> = {
  edges?: Resolver<Array<ResolversTypes['ApplicantSavedJobPostEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantSavedJobPostEdgeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantSavedJobPostEdge'] = ResolversParentTypes['ApplicantSavedJobPostEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['JobPost'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Application'] = ResolversParentTypes['Application']> = {
  applicant?: Resolver<Maybe<ResolversTypes['Applicant']>, ParentType, ContextType>;
  applicantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attachment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverLetter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interview?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType>;
  jobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType>;
  jobPostId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offer?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resume?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ApplicationStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationConnectionsResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicationConnections'] = ResolversParentTypes['ApplicationConnections']> = {
  edges?: Resolver<Array<ResolversTypes['ApplicationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationEdgeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicationEdge'] = ResolversParentTypes['ApplicationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Application'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthAccountPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthAccountPayload'] = ResolversParentTypes['AuthAccountPayload']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oAuthClient?: Resolver<Array<ResolversTypes['OAuth']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthApplicantResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthApplicant'] = ResolversParentTypes['AuthApplicant']> = {
  experienceYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  account?: Resolver<Maybe<ResolversTypes['AuthAccountPayload']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  savedApplicants?: Resolver<Array<ResolversTypes['Applicant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyJobPostsResponseResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CompanyJobPostsResponse'] = ResolversParentTypes['CompanyJobPostsResponse']> = {
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  jobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateApplicationPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CreateApplicationPayload'] = ResolversParentTypes['CreateApplicationPayload']> = {
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FindOnePayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['FindOnePayload'] = ResolversParentTypes['FindOnePayload']> = {
  account?: Resolver<Maybe<ResolversTypes['AccountPayload']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetApplicationPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['GetApplicationPayload'] = ResolversParentTypes['GetApplicationPayload']> = {
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['IAccount'] = ResolversParentTypes['IAccount']> = {
  __resolveType?: TypeResolveFn<'Account' | 'Affiliate', ParentType, ContextType>;
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InterviewResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Interview'] = ResolversParentTypes['Interview']> = {
  answerText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  answerVideo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attachment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobApplicationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobPostId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['InterviewStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobPostResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['JobPost'] = ResolversParentTypes['JobPost']> = {
  applicationDeadline?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  category?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  englishLevel?: Resolver<ResolversTypes['EnglishLevel'], ParentType, ContextType>;
  experienceLevel?: Resolver<ResolversTypes['ExperienceLevel'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interviewQuestions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  jobExperience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  jobSite?: Resolver<ResolversTypes['JobSite'], ParentType, ContextType>;
  jobType?: Resolver<ResolversTypes['JobType'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otherLanguages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  qualifications?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  salaryType?: Resolver<ResolversTypes['SalaryType'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  vacancy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobPostResponseResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['JobPostResponse'] = ResolversParentTypes['JobPostResponse']> = {
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  jobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  applicantProfileUpdate?: Resolver<ResolversTypes['AccountUpdate'], ParentType, ContextType, RequireFields<MutationapplicantProfileUpdateArgs, 'input'>>;
  createApplication?: Resolver<ResolversTypes['CreateApplicationPayload'], ParentType, ContextType, RequireFields<MutationcreateApplicationArgs, 'input'>>;
  createJobPost?: Resolver<ResolversTypes['JobPostResponse'], ParentType, ContextType, RequireFields<MutationcreateJobPostArgs, 'input'>>;
  editJobPost?: Resolver<ResolversTypes['JobPostResponse'], ParentType, ContextType, RequireFields<MutationeditJobPostArgs, 'input'>>;
  logIn?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationlogInArgs, 'input'>>;
  logOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  offerApplicant?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType, RequireFields<MutationofferApplicantArgs, 'input'>>;
  profileUpdate?: Resolver<ResolversTypes['AccountUpdate'], ParentType, ContextType, RequireFields<MutationprofileUpdateArgs, 'input'>>;
  respondInterview?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType, RequireFields<MutationrespondInterviewArgs, 'input'>>;
  respondToOffer?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType, RequireFields<MutationrespondToOfferArgs, 'input'>>;
  saveApplicant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationsaveApplicantArgs, 'input'>>;
  saveJobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<MutationsaveJobPostArgs, 'input'>>;
  sendEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sendInterviewRequest?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType, RequireFields<MutationsendInterviewRequestArgs, 'input'>>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationsignUpArgs, 'input'>>;
  signUpOAuth?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationsignUpOAuthArgs, 'input'>>;
  verifyAccount?: Resolver<ResolversTypes['VerifyAccountPayload'], ParentType, ContextType, RequireFields<MutationverifyAccountArgs, 'input'>>;
};

export type NodeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType?: TypeResolveFn<'Applicant' | 'Company' | 'Interview' | 'JobPost' | 'Offer', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OAuthResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['OAuth'] = ResolversParentTypes['OAuth']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = {
  answerText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  answerVideo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobApplicationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobPostId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OfferStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayloadErrorResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['PayloadError'] = ResolversParentTypes['PayloadError']> = {
  __resolveType?: TypeResolveFn<'AccountUpdate' | 'AuthPayload' | 'CreateApplicationPayload' | 'FindOnePayload' | 'GetApplicationPayload' | 'VerifyAccountPayload', ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAccount?: Resolver<Maybe<ResolversTypes['FindOnePayload']>, ParentType, ContextType, RequireFields<QueryfindAccountArgs, 'input'>>;
  getApplicant?: Resolver<Maybe<ResolversTypes['Applicant']>, ParentType, ContextType, RequireFields<QuerygetApplicantArgs, 'input'>>;
  getApplicants?: Resolver<Maybe<ResolversTypes['ApplicantConnection']>, ParentType, ContextType, RequireFields<QuerygetApplicantsArgs, 'input'>>;
  getCompanies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  getCompanyJobPosts?: Resolver<ResolversTypes['CompanyJobPostsResponse'], ParentType, ContextType, RequireFields<QuerygetCompanyJobPostsArgs, 'input'>>;
  getJobApplication?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType, RequireFields<QuerygetJobApplicationArgs, 'input'>>;
  getJobApplications?: Resolver<ResolversTypes['ApplicationConnections'], ParentType, ContextType, RequireFields<QuerygetJobApplicationsArgs, 'input'>>;
  getJobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QuerygetJobPostArgs, 'input'>>;
  getJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, Partial<QuerygetJobPostsArgs>>;
  getSavedApplicant?: Resolver<Array<ResolversTypes['Applicant']>, ParentType, ContextType, RequireFields<QuerygetSavedApplicantArgs, 'input'>>;
  getSavedJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QuerygetSavedJobPostsArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['AccountPayload']>, ParentType, ContextType>;
  sayHi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QuerysayHiArgs>>;
};

export type VerifyAccountPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['VerifyAccountPayload'] = ResolversParentTypes['VerifyAccountPayload']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkExperienceResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['WorkExperience'] = ResolversParentTypes['WorkExperience']> = {
  accomplishment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyWebsite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ongoing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphqlContext> = {
  Account?: AccountResolvers<ContextType>;
  AccountPayload?: AccountPayloadResolvers<ContextType>;
  AccountUpdate?: AccountUpdateResolvers<ContextType>;
  Affiliate?: AffiliateResolvers<ContextType>;
  AffiliateLight?: AffiliateLightResolvers<ContextType>;
  Applicant?: ApplicantResolvers<ContextType>;
  ApplicantAccountConnections?: ApplicantAccountConnectionsResolvers<ContextType>;
  ApplicantAccountEdge?: ApplicantAccountEdgeResolvers<ContextType>;
  ApplicantAppliedJobPostEdge?: ApplicantAppliedJobPostEdgeResolvers<ContextType>;
  ApplicantConnection?: ApplicantConnectionResolvers<ContextType>;
  ApplicantEdge?: ApplicantEdgeResolvers<ContextType>;
  ApplicantSavedJobPostConnections?: ApplicantSavedJobPostConnectionsResolvers<ContextType>;
  ApplicantSavedJobPostEdge?: ApplicantSavedJobPostEdgeResolvers<ContextType>;
  Application?: ApplicationResolvers<ContextType>;
  ApplicationConnections?: ApplicationConnectionsResolvers<ContextType>;
  ApplicationEdge?: ApplicationEdgeResolvers<ContextType>;
  AuthAccountPayload?: AuthAccountPayloadResolvers<ContextType>;
  AuthApplicant?: AuthApplicantResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyJobPostsResponse?: CompanyJobPostsResponseResolvers<ContextType>;
  CreateApplicationPayload?: CreateApplicationPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  FindOnePayload?: FindOnePayloadResolvers<ContextType>;
  GetApplicationPayload?: GetApplicationPayloadResolvers<ContextType>;
  IAccount?: IAccountResolvers<ContextType>;
  Interview?: InterviewResolvers<ContextType>;
  JobPost?: JobPostResolvers<ContextType>;
  JobPostResponse?: JobPostResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OAuth?: OAuthResolvers<ContextType>;
  Offer?: OfferResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  VerifyAccountPayload?: VerifyAccountPayloadResolvers<ContextType>;
  WorkExperience?: WorkExperienceResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = GraphqlContext> = {
  cacheControl?: cacheControlDirectiveResolver<any, any, ContextType>;
};
