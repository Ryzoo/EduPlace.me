import { CompanyPage } from './CompanyPage';
import MainLayout from '../../layouts/main/MainLayout';
import React from 'react';
import buildApp from '../../default';

buildApp(
  <MainLayout>
    <CompanyPage />
  </MainLayout>
);
