import {
  FirstPromo,
  Jumbotron,
  Partners,
  PromoColumns,
  SecondPromo,
} from '../../components/layouts/main';
import { Grid } from 'antd';
import { ServerDataContext } from '../../context';
import React, { useContext } from 'react';
import './MainPage.scss';

export const MainPage = () => {
  const { routes, t } = useContext(ServerDataContext);
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();

  return (
    <>
      <Jumbotron {...{ routes, t, screen }} />
      <Partners {...{ t, screen }} />
      <FirstPromo {...{ routes, t, screen }} />
      <PromoColumns {...{ routes, t, screen }} />
      <SecondPromo {...{ routes, t, screen }} />
    </>
  );
};
