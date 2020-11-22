import { Button, Col, Grid, Image, Row, Typography } from 'antd';
import { Container } from '../../../shared/container/Container';
import { ServerDataContext } from '../../../../context';
import { StringService, URLService } from '../../../../services';
import React, { useContext } from 'react';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const FirstPromo = () => {
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
          <Title level={2}>{t['EduPlace.me will allow you in the field of education:']}</Title>
          <Paragraph className={StringService.logicConcat({ 'mx-a': !screen.lg })}>
            {
              t[
                'EduPlace.me is prepared to work in a group, classroom based on SOLE methodology ( Self Organized Learning Environment; Sugata Mitra 2014) self-organized learning environment. It allows to a large extent to move away from the teaching knowledge (dictation, lectures). In return, it gives the group the opportunity to be active:'
              ]
            }
            <ul>
              <li>{t['ordering,']}</li>
              <li>{t['of creating,']}</li>
              <li>{t['updates,']}</li>
              <li>{t['knowledge gained,']}</li>
            </ul>
          </Paragraph>
          <Button type="primary" className="mr-2" onClick={() => URLService.goTo(routes.education)}>
            {t['Get more information']}
          </Button>
        </Col>
        <Col
          className={StringService.logicConcat('px-10', { 'text-center': !screen.lg })}
          span={24}
          lg={12}
          order={screen.lg ? 1 : 0}
        >
          <Image width="100%" src="https://via.placeholder.com/800x500" />
        </Col>
      </Row>
    </Container>
  );
};
