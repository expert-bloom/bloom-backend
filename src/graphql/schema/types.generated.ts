import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphqlContext } from 'src/graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
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
  applicant?: Maybe<ApplicantLight>;
  company?: Maybe<CompanyLight>;
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

export type AccountType =
  | 'AFFILIATE'
  | 'APPLICANT'
  | 'COMPANY';

export type AccountUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AccountUpdatePayload = PayloadError & {
  account?: Maybe<AccountPayload>;
  errors: Array<Error>;
};

export type Affiliate = IAccount & {
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type AffiliateLight = {
  id: Scalars['String'];
};

export type Applicant = IAccount & {
  WorkExperienceYears?: Maybe<Scalars['Int']>;
  about?: Maybe<Scalars['String']>;
  accomplishment?: Maybe<Scalars['String']>;
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  englishLevel?: Maybe<EnglishLevel>;
  experience?: Maybe<Scalars['Int']>;
  experienceYear?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  otherLanguages?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  salaryExpectation?: Maybe<Scalars['Int']>;
  skillLevel?: Maybe<ExperienceLevel>;
};

export type ApplicantLight = {
  WorkExperienceYears?: Maybe<Scalars['Int']>;
  about?: Maybe<Scalars['String']>;
  accomplishment?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  englishLevel?: Maybe<EnglishLevel>;
  experience?: Maybe<Scalars['Int']>;
  experienceYear?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  jobPosition?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedin?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  otherLanguages?: Maybe<Array<Maybe<Scalars['String']>>>;
  portfolio?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  salaryExpectation?: Maybe<Scalars['Int']>;
  savedJobs: Array<JobPost>;
  skillLevel?: Maybe<ExperienceLevel>;
  skills?: Maybe<Array<Scalars['String']>>;
};

export type ApplicantUpdateInput = {
  WorkExperienceYears?: InputMaybe<Scalars['Int']>;
  about?: InputMaybe<Scalars['String']>;
  accomplishment?: InputMaybe<Scalars['String']>;
  education?: InputMaybe<Scalars['String']>;
  englishLevel?: InputMaybe<EnglishLevel>;
  experience?: InputMaybe<Scalars['Int']>;
  experienceYear?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  jobPosition?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  otherLanguages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  portfolio?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<Scalars['String']>;
  salaryExpectation?: InputMaybe<Scalars['Int']>;
  skillLevel?: InputMaybe<ExperienceLevel>;
  skills?: InputMaybe<Array<Scalars['String']>>;
};

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

export type Company = IAccount & {
  accountType: AccountType;
  companyName?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type CompanyLight = {
  companyName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
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

export type IAccount = {
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type JobPost = {
  applicationDeadline: Scalars['DateTime'];
  category: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email: Scalars['String'];
  englishLevel: EnglishLevel;
  experienceLevel: ExperienceLevel;
  id: Scalars['String'];
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

export type JobPostPayload = {
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
  createJobPost: JobPostPayload;
  logIn: AuthPayload;
  saveJobPost?: Maybe<JobPost>;
  sayHi: Scalars['String'];
  signUp: AuthPayload;
  signUpOAuth: AuthPayload;
  updateProfile: AccountUpdatePayload;
};


export type MutationCreateJobPostArgs = {
  input: CreateJobPostInput;
};


export type MutationLogInArgs = {
  input: LoginInput;
};


export type MutationSaveJobPostArgs = {
  input: SaveJobPostInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignUpOAuthArgs = {
  input: OAuthSignUpInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
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

export type PayloadError = {
  errors: Array<Error>;
};

export type Query = {
  findAccount?: Maybe<FindOnePayload>;
  getCompanies: Array<Company>;
  getJobPosts: Array<JobPost>;
  getSavedJobPosts: Array<JobPost>;
  me?: Maybe<AccountPayload>;
  sayHi?: Maybe<Scalars['String']>;
};


export type QueryFindAccountArgs = {
  input: AccountInput;
};


export type QueryGetJobPostsArgs = {
  input?: InputMaybe<JopPostFilterInput>;
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

export type SaveJobPostInput = {
  accountId: Scalars['String'];
  jobPostId: Scalars['String'];
  save: Scalars['Boolean'];
};

export type SavedJobPostsInput = {
  accountId: Scalars['String'];
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
  AccountPayload: ResolverTypeWrapper<AccountPayload>;
  AccountType: AccountType;
  AccountUpdateInput: AccountUpdateInput;
  AccountUpdatePayload: ResolverTypeWrapper<AccountUpdatePayload>;
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateLight: ResolverTypeWrapper<AffiliateLight>;
  Applicant: ResolverTypeWrapper<Applicant>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ApplicantLight: ResolverTypeWrapper<ApplicantLight>;
  ApplicantUpdateInput: ApplicantUpdateInput;
  AuthAccountPayload: ResolverTypeWrapper<AuthAccountPayload>;
  AuthApplicant: ResolverTypeWrapper<AuthApplicant>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Company: ResolverTypeWrapper<Company>;
  CompanyLight: ResolverTypeWrapper<CompanyLight>;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  EnglishLevel: EnglishLevel;
  Error: ResolverTypeWrapper<Error>;
  ExperienceLevel: ExperienceLevel;
  FindOnePayload: ResolverTypeWrapper<FindOnePayload>;
  Gender: Gender;
  IAccount: ResolversTypes['Account'] | ResolversTypes['Affiliate'] | ResolversTypes['Applicant'] | ResolversTypes['Company'];
  JobPost: ResolverTypeWrapper<JobPost>;
  JobPostPayload: ResolverTypeWrapper<JobPostPayload>;
  JobSite: JobSite;
  JobType: JobType;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  MeInput: MeInput;
  Mutation: ResolverTypeWrapper<{}>;
  OAuth: ResolverTypeWrapper<OAuth>;
  OAuthAccount: OAuthAccount;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  PayloadError: ResolversTypes['AccountUpdatePayload'] | ResolversTypes['AuthPayload'] | ResolversTypes['FindOnePayload'];
  Query: ResolverTypeWrapper<{}>;
  SalaryType: SalaryType;
  SaveJobPostInput: SaveJobPostInput;
  SavedJobPostsInput: SavedJobPostsInput;
  SignUpInput: SignUpInput;
  UpdateProfileInput: UpdateProfileInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String'];
  AccountFilterInput: AccountFilterInput;
  ID: Scalars['ID'];
  AccountInput: AccountInput;
  AccountPayload: AccountPayload;
  AccountUpdateInput: AccountUpdateInput;
  AccountUpdatePayload: AccountUpdatePayload;
  Affiliate: Affiliate;
  AffiliateLight: AffiliateLight;
  Applicant: Applicant;
  Int: Scalars['Int'];
  ApplicantLight: ApplicantLight;
  ApplicantUpdateInput: ApplicantUpdateInput;
  AuthAccountPayload: AuthAccountPayload;
  AuthApplicant: AuthApplicant;
  AuthPayload: AuthPayload;
  Company: Company;
  CompanyLight: CompanyLight;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  Error: Error;
  FindOnePayload: FindOnePayload;
  IAccount: ResolversParentTypes['Account'] | ResolversParentTypes['Affiliate'] | ResolversParentTypes['Applicant'] | ResolversParentTypes['Company'];
  JobPost: JobPost;
  JobPostPayload: JobPostPayload;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  MeInput: MeInput;
  Mutation: {};
  OAuth: OAuth;
  OAuthAccount: OAuthAccount;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  PayloadError: ResolversParentTypes['AccountUpdatePayload'] | ResolversParentTypes['AuthPayload'] | ResolversParentTypes['FindOnePayload'];
  Query: {};
  SaveJobPostInput: SaveJobPostInput;
  SavedJobPostsInput: SavedJobPostsInput;
  SignUpInput: SignUpInput;
  UpdateProfileInput: UpdateProfileInput;
};

export type AccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AccountPayload'] = ResolversParentTypes['AccountPayload']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  affiliate?: Resolver<Maybe<ResolversTypes['AffiliateLight']>, ParentType, ContextType>;
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantLight']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['CompanyLight']>, ParentType, ContextType>;
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

export type AccountUpdatePayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AccountUpdatePayload'] = ResolversParentTypes['AccountUpdatePayload']> = {
  account?: Resolver<Maybe<ResolversTypes['AccountPayload']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliateResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Affiliate'] = ResolversParentTypes['Affiliate']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  englishLevel?: Resolver<Maybe<ResolversTypes['EnglishLevel']>, ParentType, ContextType>;
  experience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  experienceYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salaryExpectation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  skillLevel?: Resolver<Maybe<ResolversTypes['ExperienceLevel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantLightResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantLight'] = ResolversParentTypes['ApplicantLight']> = {
  WorkExperienceYears?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accomplishment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  education?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  englishLevel?: Resolver<Maybe<ResolversTypes['EnglishLevel']>, ParentType, ContextType>;
  experience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  experienceYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  github?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jobPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  linkedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  portfolio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salaryExpectation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  savedJobs?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType>;
  skillLevel?: Resolver<Maybe<ResolversTypes['ExperienceLevel']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
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
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyLightResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CompanyLight'] = ResolversParentTypes['CompanyLight']> = {
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'Account' | 'Affiliate' | 'Applicant' | 'Company', ParentType, ContextType>;
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type JobPostResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['JobPost'] = ResolversParentTypes['JobPost']> = {
  applicationDeadline?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  category?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  englishLevel?: Resolver<ResolversTypes['EnglishLevel'], ParentType, ContextType>;
  experienceLevel?: Resolver<ResolversTypes['ExperienceLevel'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type JobPostPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['JobPostPayload'] = ResolversParentTypes['JobPostPayload']> = {
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  jobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJobPost?: Resolver<ResolversTypes['JobPostPayload'], ParentType, ContextType, RequireFields<MutationCreateJobPostArgs, 'input'>>;
  logIn?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLogInArgs, 'input'>>;
  saveJobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<MutationSaveJobPostArgs, 'input'>>;
  sayHi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  signUpOAuth?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpOAuthArgs, 'input'>>;
  updateProfile?: Resolver<ResolversTypes['AccountUpdatePayload'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'input'>>;
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

export type PayloadErrorResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['PayloadError'] = ResolversParentTypes['PayloadError']> = {
  __resolveType: TypeResolveFn<'AccountUpdatePayload' | 'AuthPayload' | 'FindOnePayload', ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAccount?: Resolver<Maybe<ResolversTypes['FindOnePayload']>, ParentType, ContextType, RequireFields<QueryFindAccountArgs, 'input'>>;
  getCompanies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  getJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, Partial<QueryGetJobPostsArgs>>;
  getSavedJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QueryGetSavedJobPostsArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['AccountPayload']>, ParentType, ContextType, RequireFields<QueryMeArgs, 'input'>>;
  sayHi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphqlContext> = {
  Account?: AccountResolvers<ContextType>;
  AccountPayload?: AccountPayloadResolvers<ContextType>;
  AccountUpdatePayload?: AccountUpdatePayloadResolvers<ContextType>;
  Affiliate?: AffiliateResolvers<ContextType>;
  AffiliateLight?: AffiliateLightResolvers<ContextType>;
  Applicant?: ApplicantResolvers<ContextType>;
  ApplicantLight?: ApplicantLightResolvers<ContextType>;
  AuthAccountPayload?: AuthAccountPayloadResolvers<ContextType>;
  AuthApplicant?: AuthApplicantResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyLight?: CompanyLightResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  FindOnePayload?: FindOnePayloadResolvers<ContextType>;
  IAccount?: IAccountResolvers<ContextType>;
  JobPost?: JobPostResolvers<ContextType>;
  JobPostPayload?: JobPostPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OAuth?: OAuthResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

