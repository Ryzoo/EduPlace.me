import { createAsyncThunk } from '@reduxjs/toolkit';
import HttpClient from '../../../helpers/HttpClient';

// Definiujemy asynchroniczne akcje
export const asyncActions = {
  saveNewTodo: createAsyncThunk('user/saveNewTodo', async (text) => {
    const initialTodo = { text };
    const response = await HttpClient.post('/fakeApi/todos', { todo: initialTodo });
    return response.todo;
  }),
};
