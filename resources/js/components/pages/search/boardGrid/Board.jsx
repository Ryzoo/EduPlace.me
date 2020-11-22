import { Col } from 'antd';
import { Icon } from '../../../shared/icon/Icon';
import { ImageWithOverlay } from '../../../shared/imageWithOverlay/ImageWithOverlay';
import { StringService } from '../../../../services';
import { searchAsyncActions } from '../../../../store/features/search';
import { useDispatch } from 'react-redux';
import React from 'react';

export const Board = ({ board }) => {
  const dispatch = useDispatch();

  return (
    <Col className="pb-4 px-4" lg={8} md={12} sm={24} key={board.name}>
      <a>
        <ImageWithOverlay
          img={board.image}
          text={board.name}
          overlayColor="linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 40%)"
        />
      </a>
      <div className="between-flex px-3 py-2">
        <div className="board-info">
          <Icon className="mr-1" name="fa-eye" />
          {board.viewsCount}
        </div>
        {!board.isLikeLoad && (
          <div
            className={StringService.logicConcat('board-info likes', {
              reacted: board.likedByCurrentUser,
            })}
          >
            <Icon
              regular
              className="mr-1"
              name="fa-thumbs-up"
              onClick={() => dispatch(searchAsyncActions.toggleBoardLike(board.id))}
            />
            {board.likesCount}
          </div>
        )}
        {board.isLikeLoad && (
          <div className="board-info">
            <Icon className="mr-1" spin name="fa-spinner" />
          </div>
        )}
      </div>
    </Col>
  );
};
