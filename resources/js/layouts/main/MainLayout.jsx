import { Button, Drawer, Layout, Menu } from 'antd';
import { Logo } from '../../components/layouts/logo/Logo';
import { ServerDataContext, ThemeContext } from '../../context/index';
import { StringService, URLService } from '../../services';
import React, { useContext, useState } from 'react';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function MainLayout(props) {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const { routes, language, t, auth } = useContext(ServerDataContext);
  const { isDarkTheme } = useContext(ThemeContext);

  const getNavigationLink = () => [
    { label: 'EduPlace', url: routes.main },
    { label: t['For Education'], url: 'edu' },
    { label: t['For Company'], url: 'com' },
    { label: t['Search'], url: routes.search, onlyLogged: true },
  ];
  const getMenuList = (inDrawer) => {
    return (
      <>
        {!auth.isLogged ? (
          <div
            className={StringService.logicConcat({
              'float-right mx-5 show-lg': !inDrawer,
              'center-flex-a mb-1': inDrawer,
            })}
          >
            <Button onClick={() => URLService.goTo(routes.auth.login)}>{t['Login']}</Button>
            <Button type="primary" onClick={() => URLService.goTo(routes.auth.register)}>
              {t['Join us']}
            </Button>
          </div>
        ) : (
          <div
            className={StringService.logicConcat({
              'float-right mx-5 show-lg': !inDrawer,
              'center-flex-a mb-1': inDrawer,
            })}
          >
            <span className={StringService.logicConcat({ 'text-light': !inDrawer })}>
              {auth.user.name}
            </span>
            <Button className="ml-2" onClick={() => URLService.goTo(routes.auth.logout)}>
              {t['Logout']}
            </Button>
          </div>
        )}
        <Menu
          mode={inDrawer ? 'inline' : 'horizontal'}
          className={StringService.logicConcat({ 'float-right show-lg': !inDrawer })}
          defaultSelectedKeys={[routes.current]}
        >
          {getNavigationLink().map((nav) => {
            if (nav.onlyLogged && !auth.isLogged) {
              return null;
            }

            return (
              <Menu.Item
                key={nav.url}
                onClick={() => {
                  URLService.goTo(nav.url);
                }}
              >
                {nav.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </>
    );
  };

  return (
    <Layout
      className={StringService.logicConcat('main-layout', {
        dark: isDarkTheme,
      })}
    >
      <Drawer
        className={StringService.logicConcat({
          dark: isDarkTheme,
        })}
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
          className="float-left hide-lg hamburger"
          onClick={() => {
            setDrawerVisibility(true);
          }}
        >
          <i className="fas fa-bars" />
        </Button>
        <Logo />
        <Menu mode="horizontal" className="float-right">
          <SubMenu
            popupClassName={StringService.logicConcat({
              dark: isDarkTheme,
            })}
            key="language"
            title={language.toUpperCase()}
          >
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
      <Content>{props.children}</Content>
      <Footer
        className={StringService.logicConcat('text-center', {
          dark: isDarkTheme,
        })}
      >
        {`EduPlace ©2020 ${t['Created by Educated team']}`}
      </Footer>
    </Layout>
  );
}
