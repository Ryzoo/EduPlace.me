import { BoardGrid } from './boardGrid/BoardGrid';
import { DisplayedBoardsType } from '../../../enums';
import { ServerDataContext } from '../../../context';
import { URLService } from '../../../services';
import { searchSelectors } from '../../../store/features/selectors';
import { useSelector } from 'react-redux';
import React, { useContext } from 'react';

export const SearchContent = () => {
  const { t } = useContext(ServerDataContext);
  const isLoading = useSelector(searchSelectors.isLoading);
  const searchText = useSelector(searchSelectors.getSearchText);
  const displayedBoardsType = useSelector(searchSelectors.getDisplayedBoardsType);
  const boards = useSelector(searchSelectors.getAllBoards);

  return searchText.length ? (
    <BoardGrid loading={isLoading} className="b-gray pt-6" boards={boards.searchResult} />
  ) : (
    <>
      {displayedBoardsType === DisplayedBoardsType.UserOwn ? (
        <BoardGrid
          className="b-gray"
          boards={boards.user}
          showItems={6}
          heading={t['My boards']}
          moreUrl={() => URLService.goTo('#')}
        />
      ) : (
        <>
          <BoardGrid
            className="b-gray"
            boards={boards.recentlyOpened}
            showItems={6}
            heading={t['Recently opened boards']}
            moreUrl={() => URLService.goTo('#')}
          />
          <BoardGrid
            boards={boards.recommended}
            showItems={6}
            heading={t['Recommended boards']}
            moreUrl={() => URLService.goTo('#')}
          />
        </>
      )}
    </>
  );
};
