import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let data;
    try {
      data = await fs.readFile(PATH_DB, 'utf8');
    } catch {
      data = '[]';
    }
    const contacts = JSON.parse(data);
    const newOneContact = createFakeContact();
    contacts.push(newOneContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Done');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
