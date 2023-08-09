import {
  type AccountInput,
  AuthPayload,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';

async function findOne(input: AccountInput): Promise<AuthPayload> {
  // filter out the undefined values
  const filteredInput: any = Object.keys(input).reduce((acc, key) => {
    if (input[key] !== undefined) {
      acc[key] = input[key];
    }
    return acc;
  }, {});

  const account = await prisma.account.findUnique({
    where: {
      ...filteredInput,
    },
    include: {
      affiliate: true,
      applicant: true,
      company: true,
    },
  });

  console.log('find one  :  ', account, input);

  return {
    errors: [],
    account,
  };
}

const account = {
  findOne,
};

export default account;
