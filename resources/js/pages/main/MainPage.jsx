import {
  FirstPromo,
  Jumbotron,
  Partners,
  PromoColumns,
  SecondPromo,
  ThirdPromo,
} from '../../components/pages/main';
import React from 'react';
import './MainPage.scss';

export const MainPage = () => (
  <>
    <Jumbotron />
    <FirstPromo />
    <Partners />
    <SecondPromo />
    <PromoColumns />
    <ThirdPromo />
  </>
);
