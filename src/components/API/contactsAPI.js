import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c530dedae2304e92e40948.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};
export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
