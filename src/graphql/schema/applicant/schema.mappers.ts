import type { Applicant } from '@/graphql/schema/types.generated';

// override the type Applicant.savedJobs to array of [jobPost]

export type ApplicantMapper = Omit<
  Applicant,
  'savedJobs' | 'workExperience' | 'account' | 'applications'
>;
