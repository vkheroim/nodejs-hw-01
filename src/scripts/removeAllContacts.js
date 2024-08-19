import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const deleteAllContacts = [];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(deleteAllContacts, null, 2),
      'utf8',
    );

    console.log('Done');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
