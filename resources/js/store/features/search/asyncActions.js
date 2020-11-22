import { SearchAPI } from '../../../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncActions = {
  searchByText: createAsyncThunk('search/searchByText', async (text) => {
    const response = await SearchAPI.getSearchResults(text);
    return response.data;
  }),
};
