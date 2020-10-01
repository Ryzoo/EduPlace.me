import React, { useContext, useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { ServerDataContext } from '../context';
import URLService from '../services/URLService';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function MainLayout(props) {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const { routes, language, t } = useContext(ServerDataContext);

  const getNavigationLink = () => [
    { label: 'EduPlace', url: routes.main },
    { label: t['For Education'], url: 'edu' },
    { label: t['For Company'], url: 'com' },
  ];
  const getMenuList = (inDrawer) => {
    return (
      <>
        <div className={inDrawer ? 'center-flex-x mb-1' : 'float-right mx-5 show-lg'}>
          <Button onClick={() => URLService.goTo(routes.auth.login)}>{t['Login']}</Button>
          <Button type="primary" onClick={() => URLService.goTo(routes.auth.register)}>
            {t['Join us']}
          </Button>
        </div>
        <Menu
          theme={inDrawer ? 'light' : 'dark'}
          mode={inDrawer ? 'vertical' : 'horizontal'}
          className={inDrawer ? '' : 'float-right show-lg'}
          defaultSelectedKeys={[routes.current]}
        >
          {getNavigationLink().map((nav) => (
            <Menu.Item
              key={nav.url}
              onClick={() => {
                URLService.goTo(nav.url);
              }}
            >
              {nav.label}
            </Menu.Item>
          ))}
        </Menu>
      </>
    );
  };

  return (
    <Layout className="layout">
      <Drawer
        width={300}
        title="EduPlace.me"
        placement="left"
        visible={drawerVisibility}
        onClose={() => {
          setDrawerVisibility(false);
        }}
      >
        {getMenuList(true)}
      </Drawer>
      <Header>
        <Button
          type="primary"
          className="float-left hide-lg mt-3"
          onClick={() => {
            setDrawerVisibility(true);
          }}
        >
          <i className="fas fa-bars" />
        </Button>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" className="float-right">
          <SubMenu key="language" title={language.toUpperCase()}>
            <Menu.Item key="language:pl" onClick={() => URLService.goTo(routes.language.pl)}>
              PL
            </Menu.Item>
            <Menu.Item key="language:en" onClick={() => URLService.goTo(routes.language.en)}>
              EN
            </Menu.Item>
          </SubMenu>
        </Menu>
        {getMenuList(false)}
      </Header>
      <Content className="p-5" style={{ minHeight: 'calc(100vh - 135px)' }}>
        {props.children}
      </Content>
      <Footer className="text-center">{`EduPlace ©2020 ${t['Created by Educated team']}`}</Footer>
    </Layout>
  );
}
