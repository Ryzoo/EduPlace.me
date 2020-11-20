import { Col } from 'antd';
import { Icon } from '../../../shared/icon/Icon';
import { ImageWithOverlay } from '../../../shared/imageWithOverlay/ImageWithOverlay';
import React from 'react';
import StringService from '../../../../services/StringService';

export const Board = ({ board }) => {
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
          {board.viewed}
        </div>
        <div className={StringService.logicConcat('board-info likes', { reacted: board.liked })}>
          <Icon regular className="mr-1" name="fa-thumbs-up" />
          {board.likers.length}
        </div>
      </div>
    </Col>
  );
};
