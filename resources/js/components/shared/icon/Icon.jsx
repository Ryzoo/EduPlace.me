import * as classnames from 'classnames';
import React from 'react';
import './Icon.scss';

export const Icon = (props) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <span
    className={classnames({ interactive: props.onClick }, props.className)}
    onClick={props.onClick}
  >
    <i className={`fas ${props.name}`} />
  </span>
);
