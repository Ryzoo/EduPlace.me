import React from 'react';
import UserDataPage from './UserDataPage';
import buildApp from '../../../../default';
import SearchLayout from '../../../../layouts/search-layout/SearchLayout';

buildApp(
  <SearchLayout>
    <UserDataPage />
  </SearchLayout>
);
