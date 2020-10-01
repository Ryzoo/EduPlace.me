import React from 'react';
import RegisterPage from './RegisterPage';
import OneSideLayout from '../../layouts/one-side/OneSideLayout';
import buildApp from '../../default';
import RegisterPageDescription from './RegisterPageDescription';

buildApp(
  <OneSideLayout description={<RegisterPageDescription />}>
    <RegisterPage />
  </OneSideLayout>
);
