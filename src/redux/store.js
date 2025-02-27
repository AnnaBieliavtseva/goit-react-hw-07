import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer
  },
});

console.log('Store initialized:', store.getState());
