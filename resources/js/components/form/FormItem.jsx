import React from 'react';
import { Form } from 'antd';
import FormService from '../../services/FormService';

export default function FormItem(props) {
  return (
    <Form.Item
      name={props.name || ''}
      label={props.label || ''}
      rules={props.rules || []}
      hasFeedback
      valuePropName={props.valuePropName || 'value'}
      validateStatus={props.name ? FormService.getValidateStatus(props.name) : null}
      help={props.name ? FormService.getValidateError(props.name) : null}
    >
      {props.children}
    </Form.Item>
  );
}
