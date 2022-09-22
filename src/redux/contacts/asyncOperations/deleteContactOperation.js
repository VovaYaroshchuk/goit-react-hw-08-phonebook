import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact } from "../mockAPI";


export const deleteContactOperation = createAsyncThunk(
  "items/deleteContact",
  async (id, thunkAPI) => {
    const response = await deleteContact(id);
    if (response.status < 200 || response.status > 299) {
      return thunkAPI.rejectWithValue({ code: response.status, message: response.statusText });
    }

    return response.data;
  },
);