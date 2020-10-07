import React from 'react';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import buildApp from '../../../default';
import { ResetPasswordPage } from './ResetPasswordPage';
import ResetPasswordPageDescription from './ResetPasswordPageDescription';

buildApp(
  <OneSideLayout description={<ResetPasswordPageDescription />}>
    <ResetPasswordPage />
  </OneSideLayout>
);
