import { Col, Grid, Row, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { Icon } from '../../../shared/icon/Icon';
import React from 'react';

export const PromoColumns = () => {
  const { Title } = Typography;
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();

  return (
    <Container fluid className="promo-section-columns">
      <Container>
        <Row>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>Zareklamuj się</Title>
            </div>
            <p className="px-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
            </p>
          </Col>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>Uczelnia</Title>
            </div>
            <p className="px-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
            </p>
          </Col>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>E-nauczanie</Title>
            </div>
            <p className="px-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
