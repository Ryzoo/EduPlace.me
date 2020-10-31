import { Container } from '../container/Container';
import { ServerDataContext } from '../../../context/context';
import { Switch } from 'antd';
import { ThemeContext } from '../../../context/ThemeContextProvider';
import React, { useContext } from 'react';

import './ToggleTheme.scss';

export const ToggleTheme = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
  const { t } = useContext(ServerDataContext);

  return (
    <Container className="direction-column d-flex" fluid>
      <label className="pb-2" htmlFor="darkMode">
        {t['Dark mode']}
      </label>
      <Switch checked={isDarkTheme} onChange={toggleTheme} />
    </Container>
  );
};
