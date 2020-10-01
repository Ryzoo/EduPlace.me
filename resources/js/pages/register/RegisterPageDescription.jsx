import React, { useContext } from 'react';
import { ServerDataContext } from '../../context';

export default function RegisterPageDescription() {
  const { language } = useContext(ServerDataContext);

  return <p>{language}</p>;
}
