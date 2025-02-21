// import { createSelector, createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './contactsOps';

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// };

// const handlePending = state => {
//   state.contacts.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

// const slice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(
//           item => item.id !== action.payload.id
//         );
//       })
//       .addCase(deleteContact.rejected, handleRejected);
//   },
// });

// export const contactsReducer = slice.reducer;
// export const selectFilter = state => state.filter.name;
// export const selectItems = state => state.contacts.contacts.items;
// export const selectError = state => state.contacts.contacts.error;
// export const selectIsLoading = state => state.contacts.contacts.isLoading;

// export const selectFilteredContacts = createSelector(
//   [selectItems, selectFilter],
//   (items, filterName) => {
//     return items.filter(item =>
//       item.name.toLowerCase().includes(filterName.toLowerCase())
//     );
//   }
// );
