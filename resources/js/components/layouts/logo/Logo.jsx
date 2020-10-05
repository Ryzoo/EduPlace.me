import React, { useContext } from 'react';
import './Logo.scss';
import { ServerDataContext } from '../../../context';

export default function Logo(props) {
  const { routes } = useContext(ServerDataContext);

  return (
    <a href={routes.main}>
      <img
        src={props.dark ? '/images/logo.svg' : '/images/logo_white.svg'}
        alt="Logo EduPlace.me"
        className="main-logo px-3"
      />
    </a>
  );
}
