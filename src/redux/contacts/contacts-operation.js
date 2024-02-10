import * as contactsAPI from '../../components/API/contacts-api';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-slice';

export const fetchContacts = () => {
  // Action Creator
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await contactsAPI.requestFetchContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };
  return func;
};

export const addContact = body => {
  const func = async dispatch => {
    try {
      dispatch(addContactLoading());
      const data = await contactsAPI.requestAddContacts(body);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteContactLoading());
      await contactsAPI.requestDeleteContact(id);
      dispatch(deleteContactSuccess(id));
    } catch (error) {
      dispatch(deleteContactError(error.message));
    }
  };
  return func;
};
