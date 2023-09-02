import prisma from '@/lib/prisma';

async function getCompanies() {
  const companies = await prisma.company.findMany({
    where: {},
    include: {
      // account: true,
    },
  });

  return companies;
}

const account = {
  getCompanies,
};

export default account;
