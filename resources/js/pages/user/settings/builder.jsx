import React from 'react';
import SettingsPage from './SettingsPage';
import buildApp from '../../../default';
import SearchLayout from '../../../layouts/search-layout/SearchLayout';

buildApp(
  <SearchLayout>
    <SettingsPage />
  </SearchLayout>
);
