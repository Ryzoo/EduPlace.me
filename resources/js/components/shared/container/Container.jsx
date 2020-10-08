import React from 'react';

import './Container.scss';

export const Container = (props) => (
  <div className={`${props.className} container`}>{props.children}</div>
);
