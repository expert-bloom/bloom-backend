import Account, {
  type IAccount,
  type AccountModel,
} from '@/models/Account/index';
import { Schema } from 'mongoose';

// Define the company sub-schema
const companySchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
});

// Define the freelancer sub-schema
const freelancerSchema = new Schema({
  applicant: {
    type: Schema.Types.ObjectId,
    ref: 'Applicant',
  },
});

export type DiscriminatorType = 'TypeCompany' | 'TypeApplicant';

export const DiscCompany =
  (Account.discriminators?.TypeCompany as AccountModel) ??
  Account.discriminator<IAccount, AccountModel>(
    'TypeCompany' as DiscriminatorType,
    companySchema,
  );
export const DiscFreelancer =
  (Account.discriminators?.TypeApplicant as AccountModel) ??
  Account.discriminator<IAccount, AccountModel>(
    'TypeApplicant' as DiscriminatorType,
    freelancerSchema,
  );
