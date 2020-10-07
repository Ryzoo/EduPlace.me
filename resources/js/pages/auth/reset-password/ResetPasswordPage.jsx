import React, { useContext } from 'react';
import Form from '../../../components/form/Form';
import FormService from '../../../services/FormService';
import TextFormInput from '../../../components/form/form-inputs/TextFormInput';
import SubmitFormInput from '../../../components/form/form-inputs/SubmitFormInput';
import { ServerDataContext } from '../../../context';

export const ResetPasswordPage = () => {
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Form
      title={t['Change your password']}
      action={routes.auth.passwordUpdate}
      method="POST"
      initialValues={{
        email: FormService.getOldValue('email'),
        password: FormService.getOldValue('password'),
        password_confirmation: FormService.getOldValue('password_confirmation'),
      }}
    >
      <TextFormInput
        name="email"
        label={t['Email']}
        prefix={<i className="far fa-envelope-open" />}
      />
      <TextFormInput
        name="password"
        label={t['Password']}
        prefix={<i className="fas fa-unlock-alt" />}
        type="password"
      />
      <TextFormInput
        name="password_confirmation"
        label={t['Confirm password']}
        prefix={<i className="fas fa-unlock-alt" />}
        type="password"
      />
      <SubmitFormInput label={t['Change password']} />
    </Form>
  );
};
