import * as bcrypt from 'bcrypt';
import { validate } from 'uuid';

/**
 * @description - the function is used to generate the hashed password
 * @param {string} - the plainPassword
 * @returns {string} - the hashed password
 */
export async function encryptPassword(plainPassword: string) {
  const salt: string = await generateSalt();
  return await bcrypt.hash(plainPassword, salt);
}

/**
 * @description - the function is used to generate the salt for the password
 * @returns {Promise<string>}
 */
const generateSalt = async () => {
  return await bcrypt.genSalt(10);
};

/**
 * @description - the function is used to compare the plain password with the hashed password
 * @param {string} plainPassword
 * @param {string} hashedPassword
 * @returns {Promise<boolean>} isValidPassword
 */
export const isValidPassword = (plainPassword, hashedPassword) => {
  const isValidPassword = bcrypt.compareSync(plainPassword, hashedPassword);
  return isValidPassword === true;
};

export const isValidUUID = (uuid: string) => {
  return validate(uuid);
};
