import React from 'react';
import SearchPage from './SearchPage';
import buildApp from '../../default';
import SearchLayout from '../../layouts/search-layout/SearchLayout';

buildApp(
  <SearchLayout>
    <SearchPage />
  </SearchLayout>
);
