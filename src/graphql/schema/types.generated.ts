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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date | string;
};

export type Account = IAccount & {
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type AccountFilterInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AccountInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AccountPayload = {
  accountType: AccountType;
  affiliate?: Maybe<AffiliateLight>;
  applicant?: Maybe<Applicant>;
  company?: Maybe<Company>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  oAuthClient: Array<OAuth>;
  phone?: Maybe<Scalars['String']>;
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
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type Affiliate = IAccount & {
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type AffiliateLight = {
  id: Scalars['String'];
};

export type Applicant = Node & {
  WorkExperienceYears?: Maybe<Scalars['Int']>;
  about?: Maybe<Scalars['String']>;
  accomplishment?: Maybe<Scalars['String']>;
  account: Account;
  education?: Maybe<Scalars['String']>;
  englishLevel?: Maybe<EnglishLevel>;
  experienceYear?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  introVideo?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedin?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  otherLanguages?: Maybe<Array<Maybe<Scalars['String']>>>;
  portfolio?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  salaryExpectation?: Maybe<Scalars['Int']>;
  savedJobs?: Maybe<ApplicantSavedJobPostConnections>;
  skillLevel?: Maybe<ExperienceLevel>;
  skills?: Maybe<Array<Scalars['String']>>;
  workExperience: Array<WorkExperience>;
};


export type ApplicantSavedJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ApplicantAccountConnections = {
  edges: Array<ApplicantAccountEdge>;
  pageInfo: PageInfo;
};

export type ApplicantAccountEdge = {
  cursor: Scalars['String'];
  node: Account;
};

export type ApplicantAppliedJobPostEdge = {
  cursor: Scalars['String'];
  node: JobPost;
};

export type ApplicantConnection = {
  edges: Array<ApplicantEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ApplicantEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Applicant;
};

export type ApplicantFilter = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};

export type ApplicantOrdering = {
  direction: OrderDirection;
  field: AccountSortField;
};

export type ApplicantProfileUpdateInput = {
  account?: InputMaybe<AccountUpdateInput>;
  accountId: Scalars['String'];
  applicant?: InputMaybe<ApplicantUpdateInput>;
};

export type ApplicantSavedJobPostConnections = {
  edges: Array<ApplicantSavedJobPostEdge>;
  pageInfo: PageInfo;
};

export type ApplicantSavedJobPostEdge = {
  cursor: Scalars['String'];
  node: JobPost;
};

export type ApplicantUpdateInput = {
  about?: InputMaybe<Scalars['String']>;
  accomplishment?: InputMaybe<Scalars['String']>;
  englishLevel?: InputMaybe<EnglishLevel>;
  experienceYear?: InputMaybe<Scalars['Int']>;
  github?: InputMaybe<Scalars['String']>;
  introVideo?: InputMaybe<Scalars['String']>;
  jobPosition?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  portfolio?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<Scalars['String']>;
  salaryExpectation?: InputMaybe<Scalars['Int']>;
  skillLevel?: InputMaybe<ExperienceLevel>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  workExperience?: InputMaybe<Array<WorkExperienceInput>>;
};

export type Application = Node & {
  applicant?: Maybe<Applicant>;
  applicantId: Scalars['String'];
  attachment?: Maybe<Scalars['String']>;
  coverLetter: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  interview?: Maybe<Interview>;
  jobPost?: Maybe<JobPost>;
  jobPostId: Scalars['String'];
  offer?: Maybe<Offer>;
  resume: Scalars['String'];
  status: ApplicationStatus;
  updatedAt: Scalars['DateTime'];
};

export type ApplicationConnections = {
  edges: Array<ApplicationEdge>;
  pageInfo: PageInfo;
};

export type ApplicationEdge = {
  cursor: Scalars['String'];
  node: Application;
};

export type ApplicationFilter = {
  applicantId?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  jobPostId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ApplicationStatus>;
};

export type ApplicationStatus =
  | 'ACCEPTED'
  | 'INTERVIEW'
  | 'PENDING'
  | 'REJECTED';

export type AuthAccountPayload = {
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  oAuthClient: Array<OAuth>;
  phone?: Maybe<Scalars['String']>;
};

export type AuthApplicant = {
  experienceYear?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  resume?: Maybe<Scalars['String']>;
};

export type AuthPayload = PayloadError & {
  account?: Maybe<AuthAccountPayload>;
  errors: Array<Error>;
};

export type Company = Node & {
  account: Account;
  companyName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  savedApplicants: Array<Applicant>;
};

export type CompanyJobPostsResponse = {
  errors: Array<Error>;
  jobPosts: Array<JobPost>;
};

export type CreateApplicationInput = {
  applicantId: Scalars['String'];
  attachment?: InputMaybe<Scalars['String']>;
  companyId: Scalars['String'];
  coverLetter: Scalars['String'];
  email: Scalars['String'];
  jobPostId: Scalars['String'];
  phone: Scalars['String'];
  resume: Scalars['String'];
};

export type CreateApplicationPayload = PayloadError & {
  application?: Maybe<Application>;
  errors: Array<Error>;
};

export type CreateJobPostInput = {
  affiliateId?: InputMaybe<Scalars['String']>;
  applicationDeadline: Scalars['DateTime'];
  category: Array<Scalars['String']>;
  companyId: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  englishLevel: EnglishLevel;
  experienceLevel: ExperienceLevel;
  interviewQuestions: Array<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  jobExperience: Scalars['Int'];
  jobSite: JobSite;
  jobType: JobType;
  location: Scalars['String'];
  otherLanguages: Array<Scalars['String']>;
  postedBy: Scalars['String'];
  qualifications: Array<Scalars['String']>;
  salary: Array<Scalars['Int']>;
  salaryType: SalaryType;
  skills: Array<Scalars['String']>;
  title: Scalars['String'];
  vacancy: Scalars['Int'];
};

export type EditJobPostFilter = {
  companyId: Scalars['String'];
  jobPostId: Scalars['String'];
};

export type EditJobPostInput = {
  editedData: EditJobPostInputData;
  filter: EditJobPostFilter;
};

export type EditJobPostInputData = {
  applicationDeadline?: InputMaybe<Scalars['DateTime']>;
  category?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  englishLevel?: InputMaybe<EnglishLevel>;
  experienceLevel?: InputMaybe<ExperienceLevel>;
  interviewQuestions?: InputMaybe<Array<Scalars['String']>>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  jobExperience?: InputMaybe<Scalars['Int']>;
  jobSite?: InputMaybe<JobSite>;
  jobType?: InputMaybe<JobType>;
  location?: InputMaybe<Scalars['String']>;
  otherLanguages?: InputMaybe<Array<Scalars['String']>>;
  qualifications?: InputMaybe<Array<Scalars['String']>>;
  salary?: InputMaybe<Array<Scalars['Int']>>;
  salaryType?: InputMaybe<SalaryType>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  vacancy?: InputMaybe<Scalars['Int']>;
};

export type EnglishLevel =
  | 'BASIC'
  | 'CONVERSATIONAL'
  | 'FLUENT'
  | 'NATIVE';

export type Error = {
  message: Scalars['String'];
};

export type ExperienceLevel =
  | 'Beginner'
  | 'Expert'
  | 'Intermediate'
  | 'Junior'
  | 'Senior';

export type FindOnePayload = PayloadError & {
  account?: Maybe<AccountPayload>;
  errors: Array<Error>;
};

export type Gender =
  | 'FEMALE'
  | 'MALE'
  | 'OTHER';

export type GetApplicantInput = {
  id: Scalars['String'];
};

export type GetApplicantsInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ApplicantFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ApplicantOrdering>>;
};

export type GetCompanyJobPostsInput = {
  companyId: Scalars['String'];
};

export type GetJobApplicationsInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ApplicantOrdering>>;
};

export type GetJobPostInput = {
  id: Scalars['String'];
};

export type GetSavedApplicantInput = {
  companyId: Scalars['String'];
};

export type IAccount = {
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type Interview = Node & {
  answerText?: Maybe<Scalars['String']>;
  answerVideo?: Maybe<Scalars['String']>;
  applicantId: Scalars['String'];
  attachment?: Maybe<Scalars['String']>;
  companyId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  jobApplicationId?: Maybe<Scalars['String']>;
  jobPostId: Scalars['String'];
  status?: Maybe<InterviewStatus>;
  updatedAt: Scalars['DateTime'];
};

export type InterviewStatus =
  | 'ACCEPTED'
  | 'APPLICANT_REFUSED'
  | 'APPLICANT_RESPONDED'
  | 'PENDING'
  | 'REJECTED';

export type JobPost = Node & {
  applicationDeadline: Scalars['DateTime'];
  category: Array<Scalars['String']>;
  companyId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email: Scalars['String'];
  englishLevel: EnglishLevel;
  experienceLevel: ExperienceLevel;
  id: Scalars['ID'];
  interviewQuestions: Array<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  jobExperience: Scalars['Int'];
  jobSite: JobSite;
  jobType: JobType;
  location: Scalars['String'];
  otherLanguages: Array<Scalars['String']>;
  qualifications: Array<Scalars['String']>;
  salary: Array<Scalars['Int']>;
  salaryType: SalaryType;
  skills: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vacancy: Scalars['Int'];
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
  companyId: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MeInput = {
  accountId: Scalars['String'];
};

export type Mutation = {
  EditJobPost: JobPostResponse;
  applicantProfileUpdate: AccountUpdate;
  createApplication: CreateApplicationPayload;
  createJobPost: JobPostResponse;
  logIn: AuthPayload;
  offerApplicant: Scalars['String'];
  profileUpdate: AccountUpdate;
  saveApplicant?: Maybe<Scalars['Boolean']>;
  saveJobPost?: Maybe<JobPost>;
  sayHi: Scalars['String'];
  sendInterviewRequest?: Maybe<Interview>;
  signUp: AuthPayload;
  signUpOAuth: AuthPayload;
};


export type MutationEditJobPostArgs = {
  input: EditJobPostInput;
};


export type MutationApplicantProfileUpdateArgs = {
  input: ApplicantProfileUpdateInput;
};


export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type MutationCreateJobPostArgs = {
  input: CreateJobPostInput;
};


export type MutationLogInArgs = {
  input: LoginInput;
};


export type MutationOfferApplicantArgs = {
  input: SendInterviewRequestInput;
};


export type MutationProfileUpdateArgs = {
  input: UpdateProfileInput;
};


export type MutationSaveApplicantArgs = {
  input: SaveApplicantInput;
};


export type MutationSaveJobPostArgs = {
  input: SaveJobPostInput;
};


export type MutationSendInterviewRequestArgs = {
  input: SendInterviewRequestInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignUpOAuthArgs = {
  input: OAuthSignUpInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type OAuth = {
  accessToken: Scalars['String'];
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  tokenType: Scalars['String'];
};

export type OAuthAccount = {
  provider?: InputMaybe<Scalars['String']>;
};

export type OAuthAccountInput = {
  accountType: AccountType;
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  userName?: InputMaybe<Scalars['String']>;
};

export type OAuthInput = {
  accessToken: Scalars['String'];
  expires: Scalars['DateTime'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  tokenType: Scalars['String'];
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
  answerText?: Maybe<Scalars['String']>;
  answerVideo?: Maybe<Scalars['String']>;
  applicantId: Scalars['String'];
  companyId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  jobApplicationId?: Maybe<Scalars['String']>;
  jobPostId: Scalars['String'];
  status?: Maybe<OfferStatus>;
  updatedAt: Scalars['DateTime'];
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
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
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
  getJobApplications: ApplicationConnections;
  getJobPost?: Maybe<JobPost>;
  getJobPosts: Array<JobPost>;
  getSavedApplicant: Array<Applicant>;
  getSavedJobPosts: Array<JobPost>;
  me?: Maybe<AccountPayload>;
  sayHi?: Maybe<Scalars['String']>;
};


export type QueryFindAccountArgs = {
  input: AccountInput;
};


export type QueryGetApplicantArgs = {
  input: GetApplicantInput;
};


export type QueryGetApplicantsArgs = {
  input: GetApplicantsInput;
};


export type QueryGetCompanyJobPostsArgs = {
  input: GetCompanyJobPostsInput;
};


export type QueryGetJobApplicationsArgs = {
  input: GetJobApplicationsInput;
};


export type QueryGetJobPostArgs = {
  input: GetJobPostInput;
};


export type QueryGetJobPostsArgs = {
  input?: InputMaybe<JopPostFilterInput>;
};


export type QueryGetSavedApplicantArgs = {
  input: GetSavedApplicantInput;
};


export type QueryGetSavedJobPostsArgs = {
  input: SavedJobPostsInput;
};


export type QueryMeArgs = {
  input: MeInput;
};

export type SalaryType =
  | 'HOURLY'
  | 'MONTHLY'
  | 'ONE_TIME'
  | 'YEARLY';

export type SaveApplicantInput = {
  applicantId: Scalars['String'];
  companyId: Scalars['String'];
  save?: Scalars['Boolean'];
};

export type SaveJobPostInput = {
  accountId: Scalars['String'];
  jobPostId: Scalars['String'];
  save: Scalars['Boolean'];
};

export type SavedJobPostsInput = {
  accountId: Scalars['String'];
};

export type SendInterviewRequestInput = {
  applicationId: Scalars['String'];
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
};

export type SignUpInput = {
  accountType: AccountType;
  country: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UpdateProfileInput = {
  account?: InputMaybe<AccountUpdateInput>;
  accountId: Scalars['String'];
  applicant?: InputMaybe<ApplicantUpdateInput>;
};

export type WorkExperience = {
  accomplishment: Scalars['String'];
  companyName: Scalars['String'];
  companyWebsite?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ongoing: Scalars['Boolean'];
  position: Scalars['String'];
  skills: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export type WorkExperienceInput = {
  accomplishment: Scalars['String'];
  companyName: Scalars['String'];
  companyWebsite?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  ongoing: Scalars['Boolean'];
  position: Scalars['String'];
  skills: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
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



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AccountFilterInput: AccountFilterInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AccountInput: AccountInput;
  AccountPayload: ResolverTypeWrapper<Omit<AccountPayload, 'applicant' | 'company'> & { applicant: Maybe<ResolversTypes['Applicant']>, company: Maybe<ResolversTypes['Company']> }>;
  AccountSortField: AccountSortField;
  AccountType: AccountType;
  AccountUpdate: ResolverTypeWrapper<Omit<AccountUpdate, 'account'> & { account: Maybe<ResolversTypes['AccountPayload']> }>;
  AccountUpdateInput: AccountUpdateInput;
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateLight: ResolverTypeWrapper<AffiliateLight>;
  Applicant: ResolverTypeWrapper<ApplicantMapper>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
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
  Company: ResolverTypeWrapper<CompanyMapper>;
  CompanyJobPostsResponse: ResolverTypeWrapper<CompanyJobPostsResponse>;
  CreateApplicationInput: CreateApplicationInput;
  CreateApplicationPayload: ResolverTypeWrapper<Omit<CreateApplicationPayload, 'application'> & { application: Maybe<ResolversTypes['Application']> }>;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  EditJobPostFilter: EditJobPostFilter;
  EditJobPostInput: EditJobPostInput;
  EditJobPostInputData: EditJobPostInputData;
  EnglishLevel: EnglishLevel;
  Error: ResolverTypeWrapper<Error>;
  ExperienceLevel: ExperienceLevel;
  FindOnePayload: ResolverTypeWrapper<Omit<FindOnePayload, 'account'> & { account: Maybe<ResolversTypes['AccountPayload']> }>;
  Gender: Gender;
  GetApplicantInput: GetApplicantInput;
  GetApplicantsInput: GetApplicantsInput;
  GetCompanyJobPostsInput: GetCompanyJobPostsInput;
  GetJobApplicationsInput: GetJobApplicationsInput;
  GetJobPostInput: GetJobPostInput;
  GetSavedApplicantInput: GetSavedApplicantInput;
  IAccount: ResolversTypes['Account'] | ResolversTypes['Affiliate'];
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
  Node: ResolversTypes['Applicant'] | ResolversTypes['Application'] | ResolversTypes['Company'] | ResolversTypes['Interview'] | ResolversTypes['JobPost'] | ResolversTypes['Offer'];
  OAuth: ResolverTypeWrapper<OAuth>;
  OAuthAccount: OAuthAccount;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  Offer: ResolverTypeWrapper<Offer>;
  OfferStatus: OfferStatus;
  OrderDirection: OrderDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PayloadError: ResolversTypes['AccountUpdate'] | ResolversTypes['AuthPayload'] | ResolversTypes['CreateApplicationPayload'] | ResolversTypes['FindOnePayload'];
  Query: ResolverTypeWrapper<{}>;
  SalaryType: SalaryType;
  SaveApplicantInput: SaveApplicantInput;
  SaveJobPostInput: SaveJobPostInput;
  SavedJobPostsInput: SavedJobPostsInput;
  SendInterviewRequestInput: SendInterviewRequestInput;
  SignUpInput: SignUpInput;
  UpdateProfileInput: UpdateProfileInput;
  WorkExperience: ResolverTypeWrapper<WorkExperience>;
  WorkExperienceInput: WorkExperienceInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String'];
  AccountFilterInput: AccountFilterInput;
  ID: Scalars['ID'];
  AccountInput: AccountInput;
  AccountPayload: Omit<AccountPayload, 'applicant' | 'company'> & { applicant: Maybe<ResolversParentTypes['Applicant']>, company: Maybe<ResolversParentTypes['Company']> };
  AccountUpdate: Omit<AccountUpdate, 'account'> & { account: Maybe<ResolversParentTypes['AccountPayload']> };
  AccountUpdateInput: AccountUpdateInput;
  Affiliate: Affiliate;
  AffiliateLight: AffiliateLight;
  Applicant: ApplicantMapper;
  Int: Scalars['Int'];
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
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  EditJobPostFilter: EditJobPostFilter;
  EditJobPostInput: EditJobPostInput;
  EditJobPostInputData: EditJobPostInputData;
  Error: Error;
  FindOnePayload: Omit<FindOnePayload, 'account'> & { account: Maybe<ResolversParentTypes['AccountPayload']> };
  GetApplicantInput: GetApplicantInput;
  GetApplicantsInput: GetApplicantsInput;
  GetCompanyJobPostsInput: GetCompanyJobPostsInput;
  GetJobApplicationsInput: GetJobApplicationsInput;
  GetJobPostInput: GetJobPostInput;
  GetSavedApplicantInput: GetSavedApplicantInput;
  IAccount: ResolversParentTypes['Account'] | ResolversParentTypes['Affiliate'];
  Interview: Interview;
  JobPost: JobPost;
  JobPostResponse: JobPostResponse;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  MeInput: MeInput;
  Mutation: {};
  Node: ResolversParentTypes['Applicant'] | ResolversParentTypes['Application'] | ResolversParentTypes['Company'] | ResolversParentTypes['Interview'] | ResolversParentTypes['JobPost'] | ResolversParentTypes['Offer'];
  OAuth: OAuth;
  OAuthAccount: OAuthAccount;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  Offer: Offer;
  PageInfo: PageInfo;
  PayloadError: ResolversParentTypes['AccountUpdate'] | ResolversParentTypes['AuthPayload'] | ResolversParentTypes['CreateApplicationPayload'] | ResolversParentTypes['FindOnePayload'];
  Query: {};
  SaveApplicantInput: SaveApplicantInput;
  SaveJobPostInput: SaveJobPostInput;
  SavedJobPostsInput: SavedJobPostsInput;
  SendInterviewRequestInput: SendInterviewRequestInput;
  SignUpInput: SignUpInput;
  UpdateProfileInput: UpdateProfileInput;
  WorkExperience: WorkExperience;
  WorkExperienceInput: WorkExperienceInput;
};

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
  savedJobs?: Resolver<Maybe<ResolversTypes['ApplicantSavedJobPostConnections']>, ParentType, ContextType, Partial<ApplicantSavedJobsArgs>>;
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
  coverLetter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interview?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType>;
  jobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType>;
  jobPostId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offer?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType>;
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

export type IAccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['IAccount'] = ResolversParentTypes['IAccount']> = {
  __resolveType: TypeResolveFn<'Account' | 'Affiliate', ParentType, ContextType>;
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
  EditJobPost?: Resolver<ResolversTypes['JobPostResponse'], ParentType, ContextType, RequireFields<MutationEditJobPostArgs, 'input'>>;
  applicantProfileUpdate?: Resolver<ResolversTypes['AccountUpdate'], ParentType, ContextType, RequireFields<MutationApplicantProfileUpdateArgs, 'input'>>;
  createApplication?: Resolver<ResolversTypes['CreateApplicationPayload'], ParentType, ContextType, RequireFields<MutationCreateApplicationArgs, 'input'>>;
  createJobPost?: Resolver<ResolversTypes['JobPostResponse'], ParentType, ContextType, RequireFields<MutationCreateJobPostArgs, 'input'>>;
  logIn?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLogInArgs, 'input'>>;
  offerApplicant?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationOfferApplicantArgs, 'input'>>;
  profileUpdate?: Resolver<ResolversTypes['AccountUpdate'], ParentType, ContextType, RequireFields<MutationProfileUpdateArgs, 'input'>>;
  saveApplicant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSaveApplicantArgs, 'input'>>;
  saveJobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<MutationSaveJobPostArgs, 'input'>>;
  sayHi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sendInterviewRequest?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType, RequireFields<MutationSendInterviewRequestArgs, 'input'>>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  signUpOAuth?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpOAuthArgs, 'input'>>;
};

export type NodeResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Applicant' | 'Application' | 'Company' | 'Interview' | 'JobPost' | 'Offer', ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'AccountUpdate' | 'AuthPayload' | 'CreateApplicationPayload' | 'FindOnePayload', ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAccount?: Resolver<Maybe<ResolversTypes['FindOnePayload']>, ParentType, ContextType, RequireFields<QueryFindAccountArgs, 'input'>>;
  getApplicant?: Resolver<Maybe<ResolversTypes['Applicant']>, ParentType, ContextType, RequireFields<QueryGetApplicantArgs, 'input'>>;
  getApplicants?: Resolver<Maybe<ResolversTypes['ApplicantConnection']>, ParentType, ContextType, RequireFields<QueryGetApplicantsArgs, 'input'>>;
  getCompanies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  getCompanyJobPosts?: Resolver<ResolversTypes['CompanyJobPostsResponse'], ParentType, ContextType, RequireFields<QueryGetCompanyJobPostsArgs, 'input'>>;
  getJobApplications?: Resolver<ResolversTypes['ApplicationConnections'], ParentType, ContextType, RequireFields<QueryGetJobApplicationsArgs, 'input'>>;
  getJobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QueryGetJobPostArgs, 'input'>>;
  getJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, Partial<QueryGetJobPostsArgs>>;
  getSavedApplicant?: Resolver<Array<ResolversTypes['Applicant']>, ParentType, ContextType, RequireFields<QueryGetSavedApplicantArgs, 'input'>>;
  getSavedJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QueryGetSavedJobPostsArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['AccountPayload']>, ParentType, ContextType, RequireFields<QueryMeArgs, 'input'>>;
  sayHi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  WorkExperience?: WorkExperienceResolvers<ContextType>;
};

