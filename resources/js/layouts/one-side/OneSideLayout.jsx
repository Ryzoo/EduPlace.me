import React from 'react';
import { Layout } from 'antd';
import './OneSideLayout.scss';

const { Content } = Layout;

export default function OneSideLayout(props) {
  // const { routes, language, t } = useContext(ServerDataContext);

  return (
    <Layout className="one-side-layout">
      <Content className={props.blackOnLeft ? 'black-side' : 'light-side'}>
        {props.children}
      </Content>
      <Content className={props.blackOnLeft ? 'light-side' : 'black-side'}>
        {props.description}
      </Content>
    </Layout>
  );
}
