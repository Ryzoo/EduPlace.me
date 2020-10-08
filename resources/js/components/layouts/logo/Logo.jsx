import './Logo.scss';
import { Image } from 'antd';
import { ServerDataContext } from '../../../context';
import React, { useContext } from 'react';

export default function Logo(props) {
  const { routes } = useContext(ServerDataContext);

  return (
    <a href={routes.main} className="main-logo">
      <Image
        preview={false}
        src={props.dark ? '/images/logo.svg' : '/images/logo_white.svg'}
        alt="Logo EduPlace.me"
      />
    </a>
  );
}
