import { StringService } from '../../../services';
import React from 'react';
import './Container.scss';

export const Container = (props) => (
  <div
    className={StringService.logicConcat(
      { 'd-flex': !props.block, container: !props.fluid },
      props.className
    )}
  >
    {props.children}
  </div>
);
