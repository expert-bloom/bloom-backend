import type { AccountPayloadResolvers } from './../../types.generated';

export const AccountPayload: AccountPayloadResolvers = {
  /* Implement AccountPayload resolver logic here */
  profileCompleteness: (parent, args, context, info) => {
    console.log('profileCompleteness parent : ', parent);

    let completeness = 0;

    if (parent.company) {
      if (parent.company?.companyName) {
        completeness += 25;
      }
    } else if (parent.applicant) {
      if (parent.applicant?.resume) {
        completeness += 25;
      }

      if (parent.applicant?.jobPosition) {
        completeness += 25;
      }

      if (parent.applicant?.introVideo) {
        completeness += 25;
      }

      if (parent.applicant?.skills?.length) {
        completeness += 25;
      }
    }

    return completeness;
  },
};
