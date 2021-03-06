import { DisplayedBoardsType } from '../../../enums';
import { asyncActions } from './asyncActions';
import { createSlice } from '@reduxjs/toolkit';
import { extraReducers, reducers } from './reducers';

const initialState = {
  text: '',
  selectedDisplayedBoardsType: DisplayedBoardsType.Recommended,
  isLoading: false,
  boards: {
    user: [],
    recommended: [],
    recentlyOpened: [],
    searchResult: [],
  },
  tags: {
    searchResult: [],
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: reducers,
  extraReducers: extraReducers,
});

export const searchDefaultValueProvider = (serverData) => {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const text = urlParams.get('text') || '';

    return {
      ...initialState,
      text: text,
      selectedDisplayedBoardsType: text.length
        ? DisplayedBoardsType.SearchResult
        : DisplayedBoardsType.Recommended,
      boards: {
        user: serverData.viewData.userBoards,
        recommended: serverData.viewData.recommended,
        recentlyOpened: serverData.viewData.recentlyOpened,
        searchResult: serverData.viewData.searchResult.boards,
      },
      tags: {
        searchResult: serverData.viewData.searchResult.tags,
      },
    };
  } catch (e) {
    return initialState;
  }
};

export const searchActions = searchSlice.actions;
export const searchAsyncActions = asyncActions;

export const searchReducer = searchSlice.reducer;
