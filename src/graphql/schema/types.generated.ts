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

export type AccountInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AccountType =
  | 'AFFILIATE'
  | 'APPLICANT'
  | 'COMPANY';

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
  accountType: AccountType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  experienceYear?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
};

export type ApplicantLight = {
  experienceYear?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  resume?: Maybe<Scalars['String']>;
};

export type AuthAccountPayload = IAccount & {
  accountType: AccountType;
  affiliate?: Maybe<AffiliateLight>;
  applicant?: Maybe<ApplicantLight>;
  company?: Maybe<CompanyLight>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
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
  company: Scalars['String'];
  compensation: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  englishLevel?: InputMaybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  jobCategory: Array<InputMaybe<Scalars['String']>>;
  jobDeadline: Scalars['String'];
  jobExperience: Scalars['Int'];
  jobSkills: Array<Scalars['String']>;
  jobType: Scalars['String'];
  jobVacancy: Scalars['Int'];
  otherLanguages: Array<InputMaybe<Scalars['String']>>;
  salary: Array<InputMaybe<Scalars['Int']>>;
  title: Scalars['String'];
};

export type Error = {
  message: Scalars['String'];
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
  _id: Scalars['String'];
  compensation: Scalars['String'];
  description: Scalars['String'];
  englishLevel?: Maybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  jobCategory: Array<Maybe<Scalars['String']>>;
  jobDeadline: Scalars['DateTime'];
  jobExperience: Scalars['Int'];
  jobSkills: Array<Scalars['String']>;
  jobType: Scalars['String'];
  jobVacancy: Scalars['Int'];
  otherLanguages: Array<Scalars['String']>;
  salary: Array<Maybe<Scalars['Int']>>;
  title: Scalars['String'];
};

export type JopPostFilterInput = {
  company?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  createJobPost?: Maybe<JobPost>;
  logIn: AuthPayload;
  logInOAuth: AuthPayload;
  signUp: AuthPayload;
  signUpOAuth: AuthPayload;
};


export type MutationCreateJobPostArgs = {
  input: CreateJobPostInput;
};


export type MutationLogInArgs = {
  input: LoginInput;
};


export type MutationLogInOAuthArgs = {
  input: LoginInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignUpOAuthArgs = {
  input: OAuthSignUpInput;
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
  findAccount?: Maybe<AuthPayload>;
  getJobPosts: Array<JobPost>;
  me?: Maybe<Scalars['String']>;
  sayHi?: Maybe<Scalars['String']>;
};


export type QueryFindAccountArgs = {
  input: AccountInput;
};


export type QueryGetJobPostsArgs = {
  input: JopPostFilterInput;
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
  AccountInput: AccountInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AccountType: AccountType;
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateLight: ResolverTypeWrapper<AffiliateLight>;
  Applicant: ResolverTypeWrapper<Applicant>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ApplicantLight: ResolverTypeWrapper<ApplicantLight>;
  AuthAccountPayload: ResolverTypeWrapper<AuthAccountPayload>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Company: ResolverTypeWrapper<Company>;
  CompanyLight: ResolverTypeWrapper<CompanyLight>;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: ResolverTypeWrapper<Error>;
  Gender: Gender;
  IAccount: ResolversTypes['Account'] | ResolversTypes['Affiliate'] | ResolversTypes['Applicant'] | ResolversTypes['AuthAccountPayload'] | ResolversTypes['Company'];
  JobPost: ResolverTypeWrapper<JobPost>;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  PayloadError: ResolversTypes['AuthPayload'];
  Query: ResolverTypeWrapper<{}>;
  SignUpInput: SignUpInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String'];
  AccountInput: AccountInput;
  ID: Scalars['ID'];
  Affiliate: Affiliate;
  AffiliateLight: AffiliateLight;
  Applicant: Applicant;
  Int: Scalars['Int'];
  ApplicantLight: ApplicantLight;
  AuthAccountPayload: AuthAccountPayload;
  AuthPayload: AuthPayload;
  Company: Company;
  CompanyLight: CompanyLight;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  Error: Error;
  IAccount: ResolversParentTypes['Account'] | ResolversParentTypes['Affiliate'] | ResolversParentTypes['Applicant'] | ResolversParentTypes['AuthAccountPayload'] | ResolversParentTypes['Company'];
  JobPost: JobPost;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  Mutation: {};
  OAuthAccountInput: OAuthAccountInput;
  OAuthInput: OAuthInput;
  OAuthLoginInput: OAuthLoginInput;
  OAuthSignUpInput: OAuthSignUpInput;
  PayloadError: ResolversParentTypes['AuthPayload'];
  Query: {};
  SignUpInput: SignUpInput;
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
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  experienceYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantLightResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ApplicantLight'] = ResolversParentTypes['ApplicantLight']> = {
  experienceYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthAccountPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthAccountPayload'] = ResolversParentTypes['AuthAccountPayload']> = {
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  affiliate?: Resolver<Maybe<ResolversTypes['AffiliateLight']>, ParentType, ContextType>;
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantLight']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['CompanyLight']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type IAccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['IAccount'] = ResolversParentTypes['IAccount']> = {
  __resolveType: TypeResolveFn<'Account' | 'Affiliate' | 'Applicant' | 'AuthAccountPayload' | 'Company', ParentType, ContextType>;
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
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  compensation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  englishLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  jobCategory?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  jobDeadline?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  jobExperience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  jobSkills?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  jobType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jobVacancy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  otherLanguages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJobPost?: Resolver<Maybe<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<MutationCreateJobPostArgs, 'input'>>;
  logIn?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLogInArgs, 'input'>>;
  logInOAuth?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLogInOAuthArgs, 'input'>>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  signUpOAuth?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpOAuthArgs, 'input'>>;
};

export type PayloadErrorResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['PayloadError'] = ResolversParentTypes['PayloadError']> = {
  __resolveType: TypeResolveFn<'AuthPayload', ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAccount?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<QueryFindAccountArgs, 'input'>>;
  getJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QueryGetJobPostsArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sayHi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphqlContext> = {
  Account?: AccountResolvers<ContextType>;
  Affiliate?: AffiliateResolvers<ContextType>;
  AffiliateLight?: AffiliateLightResolvers<ContextType>;
  Applicant?: ApplicantResolvers<ContextType>;
  ApplicantLight?: ApplicantLightResolvers<ContextType>;
  AuthAccountPayload?: AuthAccountPayloadResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyLight?: CompanyLightResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  IAccount?: IAccountResolvers<ContextType>;
  JobPost?: JobPostResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

