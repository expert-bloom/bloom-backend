import type { Model, Types } from 'mongoose';
import { model, models, Schema } from 'mongoose';

import type { IAccountMethods } from '@/models/Account/methods';
import { registerMethods } from '@/models/Account/methods';
import { registerHooks } from '@/models/Account/hooks';

export interface IAccount<TRef = string> {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  phone: string;
  accountType: 'COMPANY' | 'APPLICANT' | 'PUBLIC';
  address: {
    country: string;
  };
  company?: TRef;
  applicant?: TRef;
}

export interface AccountDocument<TRef = Types.ObjectId>
  extends IAccount<TRef>,
    Document {
  company: TRef;
  applicant: TRef;
}

export interface AccountModel
  extends Model<AccountDocument, {}, IAccountMethods> {
  // any static methods here
}

export const AccountSchema = new Schema<
  AccountDocument,
  AccountModel,
  IAccountMethods
>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }, // role: 'COMPANY' | 'APPLICANT' | 'PUBLIC';

    gender: {
      type: String,
      enum: ['MALE', 'FEMALE', 'OTHER'],
      default: 'OTHER',
    },
    phone: String,
    accountType: {
      type: String,
      enum: ['COMPANY', 'APPLICANT', 'PUBLIC'],
      default: 'PUBLIC',
    },

    password: { type: String, required: true },
    address: {
      country: { type: String, required: true },
    },
  },
  { discriminatorKey: 'role' },
);

registerMethods();
registerHooks();

const Account =
  (models?.Account as AccountModel) ??
  (model('Account', AccountSchema) as AccountModel);

export default Account;
