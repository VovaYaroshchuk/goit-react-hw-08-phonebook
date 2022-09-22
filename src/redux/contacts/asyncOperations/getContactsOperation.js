import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../mockAPI";

export const getContactsOperation = createAsyncThunk(
  "items/getContacts",
  async (thunkAPI) => {
    const response = await fetchContacts();
    const contacts = (response.data === "Not found") ? [] : response.data;
    return contacts;
  },
  {
    condition: ( _, { getState, extra }) => {
      const { contacts } = getState();
      console.log(contacts)
      const { status } = contacts;
      if (status !== "idle" && status !== "success" && status !== "error") {
        return false;
      };
      return true;
    },
  }
)