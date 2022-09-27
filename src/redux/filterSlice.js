import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name:'filter',
    initialState: {
      value: '',
    },
    reducers: {
      set(state, {payload}) {
        state.value = payload;
      },
    },
});

export const { set } = filterSlice.actions;