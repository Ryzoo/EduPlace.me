import { Image } from 'antd';
import { ServerDataContext, ThemeContext } from '../../../context/index';
import React, { useContext } from 'react';
import './Logo.scss';

export const Logo = (props) => {
  const { routes } = useContext(ServerDataContext);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <a href={routes.main} className="main-logo">
      <Image
        preview={false}
        src={props.dark || isDarkTheme ? '/images/logo_white.svg' : '/images/logo.svg'}
        alt="Logo EduPlace.me"
      />
    </a>
  );
};
