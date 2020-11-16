import { Image } from 'antd';
import React from 'react';
import StringService from '../../../services/StringService';

import './ImageWithOverlay.scss';

export const ImageWithOverlay = (props) => (
  <div className="image-with-overlay">
    <Image width="100%" src={props.img} alt={props.text} preview={false} />
    <div
      className={StringService.logicConcat({ 'background-overlay': props.overlayColor })}
      style={{ background: props.overlayColor }}
    >
      <div className="text-overlay">{props.text}</div>
    </div>
  </div>
);
