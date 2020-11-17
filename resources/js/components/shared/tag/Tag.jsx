import { Tag as AntTag } from 'antd';
import React from 'react';

import './Tag.scss';

export const Tag = (props) => {
  return (
    <AntTag className="edu-tag mr-3 mt-2" {...props}>
      {props.children}
    </AntTag>
  );
};
