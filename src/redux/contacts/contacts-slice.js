import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contacts-operation';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)

      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })

      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export default contactSlice.reducer;

/* reducers: {
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
  },*/

/*export const {
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
*/
