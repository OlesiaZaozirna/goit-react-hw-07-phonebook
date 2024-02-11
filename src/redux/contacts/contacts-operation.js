import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../components/API/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsAPI.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.requestDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*import {
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
  //Action Creator
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
*/
