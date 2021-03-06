import { Carousel, Col, Grid, Image, Row, Typography } from 'antd';
import { Container } from '../../shared/container/Container';
import { Icon } from '../../shared/icon/Icon';
import { ServerDataContext } from '../../../context/index';
import { useContext, useEffect, useRef, useState } from 'react';
import React from 'react';

const { Title } = Typography;
const { useBreakpoint } = Grid;

export const Partners = () => {
  const { t } = useContext(ServerDataContext);
  const screen = useBreakpoint();
  const refCarousel = useRef(null);
  const next = () => refCarousel.current.next();
  const prev = () => refCarousel.current.prev();
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    if (!screen.lg && screen.md) {
      setSlidesToShow(2);
    } else if (!screen.lg && !screen.md && screen.sm) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  }, [screen]);

  return (
    <Container block fluid className="partners-section">
      <Container block>
        <Row>
          <Col span={24}>
            <Row align="center">
              <Title level={2}>{t['Already with us:']}</Title>
            </Row>
            <div className="carousel-container">
              <Icon className="carousel-arrow arrow-left" name="fa-angle-left" onClick={prev} />
              <Carousel slidesToShow={slidesToShow} ref={refCarousel}>
                <Image className="pa-2" height={150} src="/images/Chorwacja.webp" />
                <Image className="pa-2" height={150} src="/images/CzechRepublic.webp" />
                <Image className="pa-2" height={150} src="/images/Macedonia.webp" />
                <Image className="pa-2" height={150} src="/images/TurcjaAmasya.webp" />
                <Image className="pa-2" height={150} src="/images/US.webp" />
              </Carousel>
              <Icon className="carousel-arrow arrow-right" name="fa-angle-right" onClick={next} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
