import { Image } from 'antd';
import { ServerDataContext, ThemeContext } from '../../../context/index';
import React, { useContext } from 'react';
import './Logo.scss';

export const Logo = (props) => {
  const { routes } = useContext(ServerDataContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const dark = isDarkTheme ? isDarkTheme : props.dark;

  return (
    <a href={routes.main} className="main-logo">
      <Image
        preview={false}
        src={dark ? '/images/logo_white.svg' : '/images/logo.svg'}
        alt="Logo EduPlace.me"
      />
    </a>
  );
};
