import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // addContact: (state, action) => {
    //   state.contacts.items.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.contacts.items = state.contacts.items.filter(
    //     item => item.id !== action.payload
    //   );
    // },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
