import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsLoading: state => {
      state.isLoading = true;
    },
    fetchContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    fetchContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    addContactLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    addContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    addContactError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    deleteContactLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    deleteContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    deleteContactError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} = contactSlice.actions;

export default contactSlice.reducer;
