import { Button, Col, Grid, Image, Row, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { ServerDataContext } from '../../../../context';
import { StringService, URLService } from '../../../../services';
import React, { useContext } from 'react';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const SecondPromo = () => {
  const screen = useBreakpoint();
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Container className="promo-section b-white">
      <Row align="middle">
        <Col
          span={24}
          lg={12}
          className={StringService.logicConcat('px-10', { 'text-center': !screen.lg })}
        >
          <Image width="100%" src="https://via.placeholder.com/800x500" />
        </Col>
        <Col
          className={StringService.logicConcat({
            'px-10': screen.lg,
            'text-center': !screen.lg,
            'pt-4': !screen.lg,
          })}
          span={24}
          lg={12}
        >
          <Title level={2}>Edu Place pozwoli Ci</Title>
          <Paragraph className={StringService.logicConcat({ 'mx-a': !screen.lg })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec. Enim
            nulla aliquet porttitor lacus luctus. Odio ut sem nulla pharetra diam. Amet mauris
            commodo quis imperdiet. Nullam eget felis eget nunc lobortis mattis aliquam.
          </Paragraph>
          <Button type="primary" className="mr-2" onClick={() => URLService.goTo(routes.education)}>
            {t['Get more information']}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
