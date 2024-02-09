import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c530dedae2304e92e40948.mockapi.io/api/contacts',
});

export const requestContacts = () => {
  return contactsInstance.get('/');
};
