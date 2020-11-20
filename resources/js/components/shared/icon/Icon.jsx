import { StringService } from '../../../services';
import React from 'react';
import './Icon.scss';

export const Icon = (props) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <span
    className={StringService.logicConcat({ interactive: props.onClick }, props.className)}
    onClick={props.onClick}
  >
    <i
      className={StringService.logicConcat({ fas: !props.regular, far: props.regular }, props.name)}
    />
  </span>
);
