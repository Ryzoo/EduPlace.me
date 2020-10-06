import React from 'react';
import PasswordChangePage from './PasswordChangePage';
import buildApp from '../../../../default';
import SearchLayout from '../../../../layouts/search-layout/SearchLayout';

buildApp(
  <SearchLayout>
    <PasswordChangePage />
  </SearchLayout>
);
