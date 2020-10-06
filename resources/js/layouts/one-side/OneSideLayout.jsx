import React, { useContext } from 'react';
import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';
import './OneSideLayout.scss';
import URLService from '../../services/URLService';
import { ServerDataContext } from '../../context';
import Logo from '../../components/layouts/logo/Logo';

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
        <Logo dark={!props.blackOnLeft} />
        <Menu
          theme={props.blackOnLeft ? 'dark' : 'light'}
          className="float-right"
          mode="horizontal"
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
