import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  createContactsApi,
  removeContactsApi,
} from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await createContactsApi(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await removeContactsApi(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
