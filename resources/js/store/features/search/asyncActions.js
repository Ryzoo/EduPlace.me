import { BoardAPI } from '../../../api/BoardAPI';
import { SearchAPI } from '../../../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncActions = {
  searchByText: createAsyncThunk('search/searchByText', async (text) => {
    const newUrl = `${window.location.pathname}?text=${text}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
    const response = await SearchAPI.getSearchResults(text);
    return response.data;
  }),
  toggleBoardLike: createAsyncThunk('search/toggleBoardLike', async (boardId) => {
    await BoardAPI.toggleLike(boardId);
    return boardId;
  }),
};
