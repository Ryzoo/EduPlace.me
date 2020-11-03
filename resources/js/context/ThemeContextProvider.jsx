import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true' || false
  );

  const toggleTheme = (checked) => {
    setDarkTheme(checked);
  };

  useEffect(() => {
    localStorage.setItem('darkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
