import { Button, Col, Grid, Row, Typography } from 'antd';
import { Container } from '../container/Container';
import { Icon } from '../icon/Icon';
import { ImageWithOverlay } from '../imageWithOverlay/ImageWithOverlay';
import { ServerDataContext } from '../../../context';
import React, { useContext } from 'react';
import StringService from '../../../services/StringService';

import './BoardItems.scss';

const { Title } = Typography;
const { useBreakpoint } = Grid;

export const BoardItems = ({ boards, showItems, heading, moreUrl, className }) => {
  const items = showItems > 0 ? boards.slice(0, showItems) : boards;
  const screen = useBreakpoint();
  const { t } = useContext(ServerDataContext);

  return (
    <Container className={StringService.logicConcat('pt-0 boards', className)}>
      {heading ? (
        <Row className="w-100" justify={StringService.logicConcat({ center: !screen.md })}>
          <Title className="recent-content py-4" level={4}>
            {heading}
          </Title>
        </Row>
      ) : null}
      <Row>
        {items.map((board) => (
          <Col className="pb-4 px-4" lg={8} md={12} sm={24} key={board.name}>
            <a>
              <ImageWithOverlay
                img={board.img}
                text={board.name}
                overlayColor="linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 40%)"
              />
            </a>
            <div className="between-flex px-3 py-2">
              <div className={StringService.logicConcat('board-info', { reacted: board.viewed })}>
                <Icon className="mr-1" name="fa-eye" />
                {board.views}
              </div>
              <div
                className={StringService.logicConcat('board-info likes', { reacted: board.liked })}
              >
                <Icon regular className="mr-1" name="fa-thumbs-up" />
                {board.likes}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {moreUrl ? (
        <Row
          className={StringService.logicConcat('w-100', { 'pr-4': screen.md })}
          justify={StringService.logicConcat({ end: screen.md, center: !screen.md })}
        >
          <Button type="primary" shape="round" onClick={moreUrl}>
            {`${t['more']} >>`}
          </Button>
        </Row>
      ) : null}
    </Container>
  );
};
