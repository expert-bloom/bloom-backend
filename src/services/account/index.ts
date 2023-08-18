import { type AccountInput } from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';

async function findOne(input: AccountInput) {
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
      //
      // OAuthClient: {
      //   every: {
      //     ...input.OAuthAccount,
      //   },
      // },
    },
    include: {
      affiliate: true,
      applicant: true,
      company: true,
      oAuthClient: true,
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
