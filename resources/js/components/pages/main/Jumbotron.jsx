import { Button, Col, Grid, Image, Row } from 'antd';
import { Container } from '../../shared/container/Container';
import { ServerDataContext } from '../../../context/index';
import { StringService, URLService } from '../../../services';
import React, { useContext } from 'react';

const { useBreakpoint } = Grid;

export const Jumbotron = () => {
  const screen = useBreakpoint();
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Container block className="start-section b-white">
      <Row>
        <Col md={12} span={24}>
          <Row
            className={StringService.logicConcat('h-100 direction-column px-10 text-row', {
              'text-center': !screen.md,
              'py-4': !screen.md,
            })}
            justify="center"
          >
            <div className="main-text">
              <span>Edu</span>
              <span>Place</span>
              <span>.</span>
              <span>me</span>
            </div>
            <div className="sub-text">
              <span>Miejsce gdzie wiedza się porządkuje</span>
            </div>
            <Row
              className="pt-3"
              justify={StringService.logicConcat({ end: screen.md, center: !screen.md })}
            >
              <Button className="mr-2">Jakaś akcja</Button>
              <Button type="primary" onClick={() => URLService.goTo(routes.auth.register)}>
                {t['Join us']}
              </Button>
            </Row>
          </Row>
        </Col>
        <Col
          className={StringService.logicConcat('text-center', { 'd-none': !screen.md })}
          span={12}
        >
          <Image
            preview={false}
            src="/images/1.svg"
            alt="Header image"
            width={!screen.md ? '50%' : '100%'}
          />
        </Col>
      </Row>
    </Container>
  );
};
