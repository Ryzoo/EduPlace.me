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
  builder.addCase(asyncActions.toggleBoardLike.pending, (state, action) => {
    state.boards = {
      user: toggleLikeLoadInCollection(state.boards.user, action.meta.arg),
      recommended: toggleLikeLoadInCollection(state.boards.recommended, action.meta.arg),
      recentlyOpened: toggleLikeLoadInCollection(state.boards.recentlyOpened, action.meta.arg),
      searchResult: toggleLikeLoadInCollection(state.boards.searchResult, action.meta.arg),
    };
  });
  builder.addCase(asyncActions.toggleBoardLike.fulfilled, (state, action) => {
    state.boards = {
      user: toggleLikeInCollection(state.boards.user, action.payload),
      recommended: toggleLikeInCollection(state.boards.recommended, action.payload),
      recentlyOpened: toggleLikeInCollection(state.boards.recentlyOpened, action.payload),
      searchResult: toggleLikeInCollection(state.boards.searchResult, action.payload),
    };
  });
};

const toggleLikeInCollection = (collection, id) => {
  return collection.map((x) => {
    if (x.id === id) {
      const newLikeState = !x.likedByCurrentUser;

      return {
        ...x,
        likedByCurrentUser: newLikeState,
        likesCount: newLikeState ? x.likesCount + 1 : x.likesCount - 1,
        isLikeLoad: false,
      };
    }
    return x;
  });
};

const toggleLikeLoadInCollection = (collection, id) => {
  return collection.map((x) => {
    if (x.id === id) {
      return {
        ...x,
        isLikeLoad: true,
      };
    }
    return x;
  });
};
