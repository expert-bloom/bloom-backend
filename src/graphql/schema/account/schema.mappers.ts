import type {
  AccountPayload,
  Maybe,
  Omit,
  ResolversTypes,
} from '@/graphql/schema/types.generated';

export type AccountPayloadMapper = Omit<
  AccountPayload,
  'applicant' | 'company' | 'profileCompleteness'
> & {
  applicant: Maybe<ResolversTypes['Applicant']>;
  company: Maybe<ResolversTypes['Company']>;
};
