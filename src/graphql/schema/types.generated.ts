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
  accountType: AccountRoles;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
};

export type AccountRoles =
  | 'APPLICANT'
  | 'COMPANY'
  | 'PUBLIC';

export type AuthAccountPayload = IAccount & {
  accountType: AccountRoles;
  company?: Maybe<Company>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  user?: Maybe<Freelancer>;
};

export type AuthPayload = PayloadError & {
  account?: Maybe<AuthAccountPayload>;
  errors: Array<Error>;
};

export type Company = {
  companyName: Scalars['String'];
  id: Scalars['String'];
  logo: Scalars['String'];
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

export type Freelancer = {
  experienceYear: Scalars['Int'];
  id: Scalars['String'];
  resume?: Maybe<Scalars['String']>;
  savedJobs: Array<Scalars['String']>;
};

export type Gender =
  | 'FEMALE'
  | 'MALE'
  | 'OTHER';

export type IAccount = {
  accountType: AccountRoles;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
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
  signUpCompany: AuthPayload;
  signUpFreelancer: AuthPayload;
};


export type MutationCreateJobPostArgs = {
  input: CreateJobPostInput;
};


export type MutationLogInArgs = {
  input: LoginInput;
};


export type MutationSignUpCompanyArgs = {
  input: SignUpCompanyInput;
};


export type MutationSignUpFreelancerArgs = {
  input: SignUpFreelancerInput;
};

export type PayloadError = {
  errors: Array<Error>;
};

export type Query = {
  getJobPosts: Array<JobPost>;
  me?: Maybe<Scalars['String']>;
  sayHi?: Maybe<Scalars['String']>;
};


export type QueryGetJobPostsArgs = {
  input: JopPostFilterInput;
};

export type SignUpCompanyInput = {
  companyName: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type SignUpFreelancerInput = {
  country: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
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
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AccountRoles: AccountRoles;
  AuthAccountPayload: ResolverTypeWrapper<AuthAccountPayload>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Company: ResolverTypeWrapper<Company>;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: ResolverTypeWrapper<Error>;
  Freelancer: ResolverTypeWrapper<Freelancer>;
  Gender: Gender;
  IAccount: ResolversTypes['Account'] | ResolversTypes['AuthAccountPayload'];
  JobPost: ResolverTypeWrapper<JobPost>;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  PayloadError: ResolversTypes['AuthPayload'];
  Query: ResolverTypeWrapper<{}>;
  SignUpCompanyInput: SignUpCompanyInput;
  SignUpFreelancerInput: SignUpFreelancerInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String'];
  ID: Scalars['ID'];
  AuthAccountPayload: AuthAccountPayload;
  AuthPayload: AuthPayload;
  Company: Company;
  CreateJobPostInput: CreateJobPostInput;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  DateTime: Scalars['DateTime'];
  Error: Error;
  Freelancer: Freelancer;
  IAccount: ResolversParentTypes['Account'] | ResolversParentTypes['AuthAccountPayload'];
  JobPost: JobPost;
  JopPostFilterInput: JopPostFilterInput;
  LoginInput: LoginInput;
  Mutation: {};
  PayloadError: ResolversParentTypes['AuthPayload'];
  Query: {};
  SignUpCompanyInput: SignUpCompanyInput;
  SignUpFreelancerInput: SignUpFreelancerInput;
};

export type AccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  accountType?: Resolver<ResolversTypes['AccountRoles'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthAccountPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthAccountPayload'] = ResolversParentTypes['AuthAccountPayload']> = {
  accountType?: Resolver<ResolversTypes['AccountRoles'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['Freelancer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  account?: Resolver<Maybe<ResolversTypes['AuthAccountPayload']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FreelancerResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Freelancer'] = ResolversParentTypes['Freelancer']> = {
  experienceYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  savedJobs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAccountResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['IAccount'] = ResolversParentTypes['IAccount']> = {
  __resolveType: TypeResolveFn<'Account' | 'AuthAccountPayload', ParentType, ContextType>;
  accountType?: Resolver<ResolversTypes['AccountRoles'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  signUpCompany?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpCompanyArgs, 'input'>>;
  signUpFreelancer?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpFreelancerArgs, 'input'>>;
};

export type PayloadErrorResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['PayloadError'] = ResolversParentTypes['PayloadError']> = {
  __resolveType: TypeResolveFn<'AuthPayload', ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getJobPosts?: Resolver<Array<ResolversTypes['JobPost']>, ParentType, ContextType, RequireFields<QueryGetJobPostsArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sayHi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphqlContext> = {
  Account?: AccountResolvers<ContextType>;
  AuthAccountPayload?: AuthAccountPayloadResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  Freelancer?: FreelancerResolvers<ContextType>;
  IAccount?: IAccountResolvers<ContextType>;
  JobPost?: JobPostResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

