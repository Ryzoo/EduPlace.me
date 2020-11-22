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
          <Image
            width="100%"
            src="/images/promo2.webp"
            alt={t['EduPlace.me will allow you in the field of your business:']}
          />
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
          <Title level={2}>{t['EduPlace.me will allow you in the field of your business:']}</Title>
          <Paragraph className={StringService.logicConcat({ 'mx-a': !screen.lg })}>
            {
              t[
                'EduPlace.me is a project of an innovative multimedia whiteboard platform that gives the possibility of team management: projects, tasks, startups... It allows for aggregation of knowledge resources, content, data on any subject by a team of experts, staff who will easily and clearly communicate it to their team.'
              ]
            }
          </Paragraph>
          <Button type="primary" className="mr-2" onClick={() => URLService.goTo(routes.company)}>
            {t['Get more information']}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
