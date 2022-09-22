import { createSlice } from "@reduxjs/toolkit";


const contactFilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    update(filter, action) {
      if (action.payload === filter) { 
        return filter;
      }

      return action.payload;
    },
  },
});

export function selectFilter(state) {
  return state.contacts.filter;
}

export const { update } = contactFilterSlice.actions;
export default contactFilterSlice.reducer;