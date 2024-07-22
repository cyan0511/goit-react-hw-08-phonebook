import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://669bb838276e45187d3645de.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Reject the promise with the error message
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Reject the promise with the error message
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; // Return the id to identify which contact was deleted
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Reject the promise with the error message
    }
  }
);
