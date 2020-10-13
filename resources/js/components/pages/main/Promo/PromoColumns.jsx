import { Col, Grid, Row, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { Icon } from '../../../shared/icon/Icon';
import React from 'react';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const PromoColumns = () => {
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
            <Paragraph className="px-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
            </Paragraph>
          </Col>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>Uczelnia</Title>
            </div>
            <Paragraph className="px-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
            </Paragraph>
          </Col>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>E-nauczanie</Title>
            </div>
            <Paragraph className="px-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
