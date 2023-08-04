import bcrypt from 'bcryptjs';
import { AccountSchema } from '@/models/Account/index';

// register all hooks here
export function registerHooks() {
  AccountSchema.pre('save', async function (next) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password') || !this.isNew) {
      next();
      return;
    }

    try {
      const SALT_WORK_FACTOR = 10;
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      console.log('error hashing the password : ', error);
      throw new Error('Something went wrong hashing the password');
    }
  });
}
