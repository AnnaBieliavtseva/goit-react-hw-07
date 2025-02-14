import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.filters.name = actions.payload;
    },
  },
});
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
