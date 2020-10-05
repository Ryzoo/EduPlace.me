import React from 'react';
import GDPRPage from './GDPRPage';
import buildApp from '../../../../default';
import SearchLayout from '../../../../layouts/search-layout/SearchLayout';

buildApp(
  <SearchLayout>
    <GDPRPage />
  </SearchLayout>
);
