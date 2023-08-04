import bcrypt from 'bcryptjs';
import type { AccountDocument } from './index';
import type { DiscriminatorType } from '@/models/Account/discriminators';
import { AccountSchema } from './index';

export interface IAccountMethods {
  comparePassword: (
    this: AccountDocument,
    password: string,
  ) => Promise<boolean>;
  role: DiscriminatorType;

  // override the company type to be a mongoose subdocument
  // company: Types.Subdocument<Types.ObjectId>;
}

export function registerMethods() {
  AccountSchema.methods.comparePassword = async function (
    candidatePassword: string,
  ) {
    return bcrypt.compare(candidatePassword, this.password);
  };
}
