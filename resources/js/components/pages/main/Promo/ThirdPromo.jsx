import { Button, Col, Grid, Image, Row, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { ServerDataContext } from '../../../../context';
import { StringService, URLService } from '../../../../services';
import React, { useContext } from 'react';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const ThirdPromo = () => {
  const screen = useBreakpoint();
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Container className="promo-section b-white">
      <Row align="middle">
        <Col
          className={StringService.logicConcat({
            'px-10': screen.lg,
            'text-center': !screen.lg,
            'pt-4': !screen.lg,
          })}
          span={24}
          lg={12}
          order={screen.lg ? 0 : 1}
        >
          <Title level={2}>{t['EduPlace.me will allow you in terms of advertising:']}</Title>
          <Paragraph className={StringService.logicConcat({ 'mx-a': !screen.lg })}>
            {
              t[
                'EduPlace.me is not only a good way to advertise products that solve your customers problems, it is also a way of promotion:'
              ]
            }
            <ul>
              <li>{t['institutions,']}</li>
              <li>{t['university,']}</li>
              <li>{t['a school that can expose valuable topics,']}</li>
              <li>{t['companies,']}</li>
              <li>{t['services,']}</li>
            </ul>
          </Paragraph>
          <Button
            type="primary"
            className="mr-2"
            onClick={() => URLService.goTo(routes.autopromotion)}
          >
            {t['Get more information']}
          </Button>
        </Col>
        <Col
          className={StringService.logicConcat('px-10', { 'text-center': !screen.lg })}
          span={24}
          lg={12}
          order={screen.lg ? 1 : 0}
        >
          <Image
            width="100%"
            src="/images/promo3.webp"
            alt={t['EduPlace.me will allow you in terms of advertising:']}
          />
        </Col>
      </Row>
    </Container>
  );
};
