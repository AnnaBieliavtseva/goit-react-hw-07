import { createSelector } from "@reduxjs/toolkit";
import { selectAllContacts } from "../contacts/selectors";

export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (items, filterName) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);