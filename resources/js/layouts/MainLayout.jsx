import React, {useContext} from 'react'
import {Dropdown, Button, Layout, Menu, Breadcrumb} from 'antd';
import {ServerDataContext} from "../context";
import URLService from "../services/URLService";

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;

export default function MainLayout(props) {
  const {routes, language, translation} = useContext(ServerDataContext);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ float: 'right'}}>
          <SubMenu key="language" title={language.toUpperCase()}>
            <Menu.Item key="language:pl" onClick={() => URLService.goTo(routes.language.pl)}>PL</Menu.Item>
            <Menu.Item key="language:en" onClick={() => URLService.goTo(routes.language.en)}>EN</Menu.Item>
          </SubMenu>
        </Menu>
        <div style={{ float: 'right', margin: '0 25px'}}>
          <Button onClick={() => URLService.goTo(routes.auth.login)}>{translation['Login']}</Button>
          <Button type='primary' onClick={() => URLService.goTo(routes.auth.register)}>{translation['Join us']}</Button>
        </div>
        <Menu theme="dark" mode="horizontal" style={{ float: 'right'}} defaultSelectedKeys={['1']}>
          <Menu.Item key="1">EduPlace</Menu.Item>
          <Menu.Item key="2">{translation['For Education']}</Menu.Item>
          <Menu.Item key="3">{translation['For Company']}</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
          {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>EduPlace ©2020 {translation['Created by Educated team']}</Footer>
    </Layout>
  )
}