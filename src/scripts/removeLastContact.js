import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    let data = [];
    try {
      data = await fs.readFile(PATH_DB, 'utf8');
    } catch (error) {
      console.log(error);
    }
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
    } else {
      console.log('No contacts to remove');
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Done');
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
