import * as classnames from 'classnames';
import React from 'react';

import './Container.scss';

export const Container = (props) => (
  <div className={classnames('container', props.className)}>{props.children}</div>
);
