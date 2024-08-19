import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let data;
    try {
      data = await fs.readFile(PATH_DB, 'utf8');
    } catch {
      data = '[]';
    }
    const contacts = JSON.parse(data);
    const newContacts = [];
    for (let i = 0; i < number; i += 1) {
      newContacts.push(createFakeContact());
    }
    const updatedData = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2), 'utf8');

    console.log('Done');
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
