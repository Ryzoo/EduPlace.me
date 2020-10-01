import React, { useContext, useState } from 'react';
import { Spin, Form, Card, Button, Checkbox, Input } from 'antd';
import { ServerDataContext } from '../../context';
import FormService from '../../services/FormService';

export default function RegisterPage() {
  const [isLoading, setLoading] = useState(false);
  const { routes } = useContext(ServerDataContext);

  return (
    <Card title="Create your account" style={{ width: 360 }}>
      {isLoading ? (
        <Spin className="d-block" />
      ) : (
        <Form
          layout="vertical"
          onFinish={(data) => {
            FormService.submit(routes.action.register, 'POST', data);
            setLoading(true);
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            hasFeedback
            validateStatus={FormService.getValidateStatus('name')}
            help={FormService.getValidateError('name')}
          >
            <Input size="large" prefix={<i className="far fa-user" />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            hasFeedback
            validateStatus={FormService.getValidateStatus('email')}
            help={FormService.getValidateError('email')}
          >
            <Input
              size="large"
              prefix={<i className="far fa-envelope-open" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            hasFeedback
            validateStatus={FormService.getValidateStatus('password')}
            help={FormService.getValidateError('password')}
          >
            <Input
              size="large"
              prefix={<i className="fas fa-unlock-alt" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password_confirmation"
            label="Confirm password"
            hasFeedback
            validateStatus={FormService.getValidateStatus('password_confirmation')}
            help={FormService.getValidateError('password_confirmation')}
          >
            <Input
              size="large"
              prefix={<i className="fas fa-unlock-alt" />}
              type="password"
              placeholder="Confirm password"
            />
          </Form.Item>

          <Form.Item
            name="regulation_accept"
            valuePropName="checked"
            hasFeedback
            validateStatus={FormService.getValidateStatus('regulation_accept')}
            help={FormService.getValidateError('regulation_accept')}
          >
            <Checkbox size="large">
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="rodo_accept"
            valuePropName="checked"
            hasFeedback
            validateStatus={FormService.getValidateStatus('rodo_accept')}
            help={FormService.getValidateError('rodo_accept')}
          >
            <Checkbox size="large">
              I accept the <a href="">RODO</a> policy
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <div className="text-right">
              <Button size="large" type="primary" htmlType="submit">
                Register
              </Button>
              <br />
              <a href="">I already have account</a>
            </div>
          </Form.Item>
        </Form>
      )}
    </Card>
  );
}
