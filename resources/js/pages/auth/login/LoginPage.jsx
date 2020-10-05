import React, { useContext } from 'react';
import { ServerDataContext } from '../../../context';
import Form from '../../../components/form/Form';
import TextFormInput from '../../../components/form/form-inputs/TextFormInput';
import CheckboxFormInput from '../../../components/form/form-inputs/CheckboxFormInput';
import SubmitFormInput from '../../../components/form/form-inputs/SubmitFormInput';
import FormService, { OldValueType } from '../../../services/FormService';

export default function LoginPage() {
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Form
      title={t['Login to system']}
      action={routes.action.login}
      method="POST"
      initialValues={{
        email: FormService.getOldValue('email'),
        password: FormService.getOldValue('password'),
        remember: FormService.getOldValue('password', OldValueType.BOOL),
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
      <CheckboxFormInput name="remember">{t['Remember me']}</CheckboxFormInput>
      <SubmitFormInput label={t['Login']}>
        <a href={routes.auth.passwordReset} className="flex-align-right mt-2">
          {t['I forgot my password.']}
        </a>
        <a href={routes.auth.register} className="flex-align-right mt-2">
          {t['I dont have account yet.']}
        </a>
      </SubmitFormInput>
    </Form>
  );
}