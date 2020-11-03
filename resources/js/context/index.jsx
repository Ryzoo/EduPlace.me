import { createContext } from 'react';

export const ServerDataContext = createContext(window.serverData);
export { ThemeContextProvider, ThemeContext } from './ThemeContextProvider';
