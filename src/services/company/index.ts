import type { Company } from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';

async function getCompanies(): Promise<Company[]> {
  const companies = await prisma.company.findMany({
    where: {},
    include: {
      account: true,
    },
  });

  return companies.map((company) => ({
    ...company,
    ...company.account,
  }));
}

const account = {
  getCompanies,
};

export default account;
