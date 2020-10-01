import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import './OneSideLayout.scss';
import URLService from '../../services/URLService';
import { ServerDataContext } from '../../context';

const { Content, Header } = Layout;
const { SubMenu } = Menu;
export default function OneSideLayout(props) {
  const { routes, language } = useContext(ServerDataContext);

  return (
    <>
      <Header
        style={{
          background: 'transparent',
          position: 'fixed',
          width: '100%',
        }}
      >
        <Menu
          theme={props.blackOnLeft ? 'dark' : 'light'}
          mode="horizontal"
          className="float-right"
        >
          <SubMenu key="language" title={language.toUpperCase()}>
            <Menu.Item key="language:pl" onClick={() => URLService.goTo(routes.language.pl)}>
              PL
            </Menu.Item>
            <Menu.Item key="language:en" onClick={() => URLService.goTo(routes.language.en)}>
              EN
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Layout className="one-side-layout">
        <Content className={props.blackOnLeft ? 'black-side' : 'light-side'}>
          {props.children}
        </Content>
        <Content className={props.blackOnLeft ? 'light-side' : 'black-side'}>
          {props.description}
        </Content>
      </Layout>
    </>
  );
}
