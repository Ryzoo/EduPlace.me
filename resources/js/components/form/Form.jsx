import React, { useState } from 'react';
import { Form as FormAntd, Card, Spin } from 'antd';
import FormService from '../../services/FormService';

export default function Form(props) {
  const [isLoading, setLoading] = useState(false);

  return (
    <Card title={props.title} className="mx-a w-100" style={{ maxWidth: props.width || 450 }}>
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
