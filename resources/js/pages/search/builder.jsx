import { SearchPage } from './SearchPage';
import React from 'react';
import SearchLayout from '../../layouts/search-layout/SearchLayout';
import buildApp from '../../default';

buildApp(
  <SearchLayout>
    <SearchPage />
  </SearchLayout>
);
