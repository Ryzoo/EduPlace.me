import React from 'react';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import buildApp from '../../../default';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import ResetPasswordPageDescription from './ForgotPasswordPageDescription';

buildApp(
  <OneSideLayout description={<ResetPasswordPageDescription />}>
    <ForgotPasswordPage />
  </OneSideLayout>
);
