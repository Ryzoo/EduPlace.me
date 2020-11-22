import { Col, Grid, Row, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { Icon } from '../../../shared/icon/Icon';
import { ServerDataContext } from '../../../../context';
import React, { useContext } from 'react';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const PromoColumns = () => {
  const screen = useBreakpoint();
  const { t } = useContext(ServerDataContext);

  return (
    <Container fluid className="promo-section-columns">
      <Container>
        <Row>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>{t['E-learning']}</Title>
            </div>
            <Paragraph className="px-7">
              {t['Schools, universities, individual courses and boards']}
            </Paragraph>
          </Col>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>{t['Business']}</Title>
            </div>
            <Paragraph className="px-7">
              {t['Development of start-ups, staff, management']}
            </Paragraph>
          </Col>
          <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
            <div className="heading">
              <Icon name="fa-crown" />
              <Title level={2}>{t['Advertising']}</Title>
            </div>
            <Paragraph className="px-7">{t['Advertising, promotion, knowledge sales']}</Paragraph>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
