import React from 'react';
import LoginPage from './LoginPage';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import buildApp from '../../../default';
import LoginPageDescription from './LoginPageDescription';

buildApp(
  <OneSideLayout description={<LoginPageDescription />}>
    <LoginPage />
  </OneSideLayout>
);
