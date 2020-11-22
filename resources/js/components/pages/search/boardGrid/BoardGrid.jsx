import { Board } from './Board';
import { Button, Empty, Grid, Row, Skeleton, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { ServerDataContext } from '../../../../context';
import { StringService } from '../../../../services';
import React, { useContext } from 'react';
import './BoardGrid.scss';

const { Title } = Typography;
const { useBreakpoint } = Grid;

export const BoardGrid = ({ boards, showItems, heading, moreUrl, className, loading = false }) => {
  const items = showItems > 0 ? boards.slice(0, showItems) : boards;
  const screen = useBreakpoint();
  const { t } = useContext(ServerDataContext);

  return (
    <Container className={StringService.logicConcat('pt-0 boards', className)}>
      <Skeleton loading={loading} active={true}>
        {heading ? (
          <Row className="w-100" justify={StringService.logicConcat({ center: !screen.md })}>
            <Title className="recent-content py-4" level={4}>
              {heading}
            </Title>
          </Row>
        ) : null}
        <Row className="w-100">
          {items.length ? (
            items.map((board) => <Board key={board.name} {...{ board }} />)
          ) : (
            <Empty className="mx-a" description={false} />
          )}
        </Row>
        {moreUrl ? (
          <Row
            className={StringService.logicConcat('w-100', { 'pr-4': screen.md })}
            justify={StringService.logicConcat({ end: screen.md, center: !screen.md })}
          >
            <Button type="primary" onClick={moreUrl}>
              {`${t['more']} >>`}
            </Button>
          </Row>
        ) : null}
      </Skeleton>
    </Container>
  );
};
