import React, { useContext } from 'react';
import { Col, Empty, DatePicker, Slider, Row } from 'antd';
import dayjs from 'dayjs';
import { ServerDataContext } from '../../context';

export default function MainPage() {
  const { language } = useContext(ServerDataContext);

  return (
    <>
      <Row>
        <Col span={24}>
          <DatePicker />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider defaultValue={30} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>{dayjs(dayjs().subtract(2, 'year')).fromNow()}</Col>
      </Row>
      <Row>
        <Col span={24}>
          current:
          <b>{language}</b>
          <Empty />
        </Col>
      </Row>
    </>
  );
}
