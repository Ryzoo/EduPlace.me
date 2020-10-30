import { ThemeContextProvider } from './ThemeContextProvider';
import { createContext } from 'react';

export const ServerDataContext = createContext(window.serverData);
export const ThemeContext = createContext(ThemeContextProvider);
