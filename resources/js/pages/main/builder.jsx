import React from 'react';
import MainPage from './MainPage';
import MainLayout from '../../layouts/MainLayout';
import buildApp from '../../default';

buildApp(
  <MainLayout>
    <MainPage />
  </MainLayout>
);
