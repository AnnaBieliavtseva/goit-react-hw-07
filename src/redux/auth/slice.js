import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      password: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing:false,
    },
  reducers:{},
});
export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
console.log(selectIsLoggedIn);

export const selectUser = state => state.auth.user;
console.log(selectUser);

export const selectIsRefreshing = state => state.auth.isRefreshing;