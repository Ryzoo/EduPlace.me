import { ThemeContext } from './context';
import React, { useState } from 'react';

export const ThemeContextProvider = (props) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = (checked) => {
    setDarkTheme(checked);
    console.log(`switch to ${checked}`);
  };

  return <ThemeContext value={{ isDarkTheme, toggleTheme }}>{props.children}</ThemeContext>;
};
