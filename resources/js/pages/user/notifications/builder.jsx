import React from 'react';
import NotificationsPage from './NotificationsPage';
import buildApp from '../../../default';
import SearchLayout from '../../../layouts/search-layout/SearchLayout';

buildApp(
  <SearchLayout>
    <NotificationsPage />
  </SearchLayout>
);
