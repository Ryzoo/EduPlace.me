import { DisplayedBoardsType } from '../../../enums';
import { asyncActions } from './asyncActions';

export const reducers = {
  setDisplayedBoardsType(state, action) {
    state.selectedDisplayedBoardsType = action.payload;
  },
  setSearchedText(state, action) {
    state.text = action.payload;
  },
};

export const extraReducers = (builder) => {
  builder.addCase(asyncActions.searchByText.rejected, (state) => {
    state.isLoading = false;
  });
  builder.addCase(asyncActions.searchByText.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(asyncActions.searchByText.fulfilled, (state, action) => {
    state.isLoading = false;
    state.selectedDisplayedBoardsType = DisplayedBoardsType.SearchResult;
    state.boards.searchResult = action.payload.boards;
    state.tags.searchResult = action.payload.tags;
  });
};
