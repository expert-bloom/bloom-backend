import bcrypt from 'bcrypt';

export async function hashPassword(password: string, SALT_WORK_FACTOR = 10) {
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    return bcrypt.hash(password, salt);
  } catch (error) {
    console.log('error hashing the password : ', error);
    throw new Error('Something went wrong hashing the password');
  }
}

export async function comparePassword(password1: string, password2: string) {
  return bcrypt.compare(password1, password2) as boolean;
}


export const clearUndefined = (obj = {}) : Record<string, any> => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc ;
  }, {});
};
