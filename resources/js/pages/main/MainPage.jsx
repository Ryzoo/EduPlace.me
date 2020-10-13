import {
  FirstPromo,
  Jumbotron,
  Partners,
  PromoColumns,
  SecondPromo,
} from '../../components/pages/main';
import React from 'react';
import './MainPage.scss';

export const MainPage = () => (
  <>
    <Jumbotron />
    <Partners />
    <FirstPromo />
    <PromoColumns />
    <SecondPromo />
  </>
);
