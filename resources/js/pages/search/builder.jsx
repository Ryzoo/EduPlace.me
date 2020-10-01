import React from 'react';
import SearchPage from './SearchPage';
import MainLayout from '../../layouts/main/MainLayout';
import buildApp from '../../default';

buildApp(
  <MainLayout>
    <SearchPage />
  </MainLayout>
);
