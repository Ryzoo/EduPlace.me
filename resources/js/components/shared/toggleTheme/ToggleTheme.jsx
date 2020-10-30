import { Switch } from 'antd';
import { ThemeContextProvider } from '../../../context/ThemeContextProvider';
import React, { useContext } from 'react';

export const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContextProvider);

  return <Switch defaultChecked onChange={toggleTheme} />;
};
