import React from 'react';

export const Container = (props) => (
  <section className={`${props.className} d-block`}>{props.children}</section>
);
