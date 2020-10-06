import React, { useState } from 'react';
import FormAntd from 'antd/es/form';
import Spin from 'antd/es/spin';
import Card from 'antd/es/card';
import FormService from '../../services/FormService';

export default function Form(props) {
  const [isLoading, setLoading] = useState(false);

  return (
    <Card title={props.title} style={{ width: props.width || 360 }}>
      {isLoading ? (
        <Spin className="d-block" />
      ) : (
        <FormAntd
          initialValues={props.initialValues || {}}
          layout={props.layout || 'vertical'}
          onFinish={(data) => {
            FormService.submit(props.action, props.method, data);
            setLoading(true);
          }}
        >
          {props.children}
        </FormAntd>
      )}
    </Card>
  );
}
