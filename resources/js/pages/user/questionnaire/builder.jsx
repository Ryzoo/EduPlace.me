import { QuestionnairePage } from './QuestionnairePage';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import React from 'react';
import buildApp from '../../../default';

buildApp(
  <OneSideLayout blackOnLeft>
    <QuestionnairePage />
  </OneSideLayout>
);
