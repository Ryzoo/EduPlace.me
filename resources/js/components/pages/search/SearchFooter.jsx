import { Button, Col, Row } from 'antd';
import { ConnectedPillButtons } from '../../shared/connectedPillButtons/ConnectedPillButtons';
import { DisplayedBoardsType } from '../../../enums';
import { SearchTagsResult } from './SearchTagsResult';
import { ServerDataContext } from '../../../context';
import { StringService } from '../../../services';
import { searchActions } from '../../../store/features/search';
import { searchSelectors } from '../../../store/features/selectors';
import { useDispatch, useSelector } from 'react-redux';
import React, { useContext } from 'react';

export const SearchFooter = () => {
  const { t } = useContext(ServerDataContext);
  const dispatch = useDispatch();
  const searchText = useSelector(searchSelectors.getSearchText);
  const displayedBoardsType = useSelector(searchSelectors.getDisplayedBoardsType);

  return (
    <Row justify="center" className="my-6">
      <Col md={12}>
        <Row justify="center">
          {searchText.length ? (
            <SearchTagsResult />
          ) : (
            <ConnectedPillButtons>
              <Button
                className={StringService.logicConcat({
                  'btn-white': displayedBoardsType === DisplayedBoardsType.UserOwn,
                })}
                type={StringService.logicConcat({
                  primary: displayedBoardsType !== DisplayedBoardsType.UserOwn,
                })}
                shape="round"
                onClick={() =>
                  dispatch(searchActions.setDisplayedBoardsType(DisplayedBoardsType.Recommended))
                }
              >
                {t['All boards']}
              </Button>
              <Button
                className={StringService.logicConcat({
                  'btn-white': displayedBoardsType !== DisplayedBoardsType.UserOwn,
                })}
                type={StringService.logicConcat({
                  primary: displayedBoardsType === DisplayedBoardsType.UserOwn,
                })}
                shape="round"
                onClick={() =>
                  dispatch(searchActions.setDisplayedBoardsType(DisplayedBoardsType.UserOwn))
                }
              >
                {t['My boards']}
              </Button>
            </ConnectedPillButtons>
          )}
        </Row>
      </Col>
    </Row>
  );
};
