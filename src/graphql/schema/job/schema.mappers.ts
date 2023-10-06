import type { Application } from '@/graphql/schema/types.generated';

export type ApplicationMapper = Omit<Application, 'applicant'>;
