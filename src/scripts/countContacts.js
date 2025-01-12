import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  let allContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    allContacts = JSON.parse(data);
    console.log('Done');
  } catch (error) {
    console.log(error);
  }
  return allContacts.length;
};

console.log(await countContacts());
