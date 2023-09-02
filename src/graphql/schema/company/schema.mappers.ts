import type { Company } from '@/graphql/schema/types.generated';

export type CompanyMapper = Omit<Company, 'account'>;
