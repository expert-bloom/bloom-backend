import { ApplicantMapper } from '../../applicant/schema.mappers';
import type { AccountPayloadResolvers } from './../../types.generated';

export const AccountPayload: AccountPayloadResolvers = {
  /* Implement AccountPayload resolver logic here */
  profileCompleteness: async (parent, args, context, info) => {
    console.log('profileCompleteness parent : ', parent);

    let completeness = 0;

    if (parent.company) {
      // check if parent.company is a promise
      if (parent.company instanceof Promise) {
        // access the company name
        completeness = await parent.company.then((company) =>
          company?.companyName ? (completeness += 25) : 0,
        );
      } else if (parent?.company?.companyName) {
        completeness += 25;
      }
    } else if (parent.applicant) {
      let applicant: ApplicantMapper;

      if (parent.applicant instanceof Promise) {
        applicant = await parent.applicant;
      } else {
        applicant = parent.applicant;
      }

      if (applicant?.resume) {
        completeness += 25;
      }

      if (applicant?.jobPosition) {
        completeness += 25;
      }

      if (applicant?.introVideo) {
        completeness += 25;
      }

      if (applicant?.skills?.length) {
        completeness += 25;
      }
    }

    return completeness;
  }, // applicant: () => { /* AccountPayload.applicant resolver is required because AccountPayload.applicant exists but AccountPayloadMapper.applicant does not */ },
  // company: () => { /* AccountPayload.company resolver is required because AccountPayload.company exists but AccountPayloadMapper.company does not */ }
};
