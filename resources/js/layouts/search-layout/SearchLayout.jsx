import { Badge, Button, Drawer, Layout, Menu } from 'antd';
import { EmailNotVerifiedBanner } from '../../components/layouts/EmailNotVerifiedBanner';
import { Icon } from '../../components/shared/icon/Icon';
import { Logo } from '../../components/layouts/logo/Logo';
import { ServerDataContext, ThemeContext } from '../../context/index';
import { authUser } from '../../store/features/user/user';
import { useSelector } from 'react-redux';
import React, { useContext, useState } from 'react';
import StringService from '../../services/StringService';
import URLService from '../../services/URLService';

import './SearchLayout.scss';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function SearchLayout(props) {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const { routes, language, t } = useContext(ServerDataContext);
  const user = useSelector(authUser);
  const { isDarkTheme } = useContext(ThemeContext);

  const getNavigationLink = () => [
    {
      label: (
        <Button type="primary" onClick={() => URLService.goTo('#')}>
          {t['+ Add content']}
        </Button>
      ),
      url: '#',
      class: 'hide-hover-effects',
    },
    { label: t['Search'], url: routes.search, class: '' },
    {
      label: (
        <Badge count={user.notifications.count}>
          <Icon className="notifications" regular name="fa-bell" />
        </Badge>
      ),
      url: routes.user.notifications,
      class: '',
    },
  ];

  const getUserMenu = () => (
    <SubMenu
      popupClassName={StringService.logicConcat({
        dark: isDarkTheme,
      })}
      icon={<i className="far fa-user mr-2" />}
      title={<span className="pr-3">{user.name}</span>}
    >
      <Menu.Item
        key={routes.user.notifications}
        onClick={() => URLService.goTo(routes.user.notifications)}
      >
        <Badge count={user.notifications.count}>
          <span className="pr-3">{t['Notifications']}</span>
        </Badge>
      </Menu.Item>
      <SubMenu
        popupClassName={StringService.logicConcat({
          dark: isDarkTheme,
        })}
        title={t['Settings']}
      >
        <Menu.Item
          key={routes.user.settings.data}
          onClick={() => URLService.goTo(routes.user.settings.data)}
        >
          {t['User data']}
        </Menu.Item>
        <Menu.Item
          key={routes.user.settings.password}
          onClick={() => URLService.goTo(routes.user.settings.password)}
        >
          {t['Change password']}
        </Menu.Item>
        <Menu.Item
          key={routes.user.settings.gdpr}
          onClick={() => URLService.goTo(routes.user.settings.gdpr)}
        >
          {t['RODO']}
        </Menu.Item>
      </SubMenu>
      <Menu.Item onClick={() => URLService.goTo(routes.auth.logout)}>{t['Logout']}</Menu.Item>
    </SubMenu>
  );

  const getMenuList = (inDrawer) => {
    return (
      <>
        <div className={inDrawer ? 'center-flex-a mb-1' : 'float-right mx-5 show-lg'}>
          <span className={inDrawer ? '' : 'text-light'} />
        </div>
        <Menu
          mode={inDrawer ? 'inline' : 'horizontal'}
          className={inDrawer ? '' : 'float-right show-lg'}
          defaultSelectedKeys={[routes.current]}
        >
          {getNavigationLink().map((nav) => (
            <Menu.Item
              className={nav.class}
              key={nav.url}
              onClick={() => {
                URLService.goTo(nav.url);
              }}
            >
              {nav.label}
            </Menu.Item>
          ))}
          {getUserMenu()}
        </Menu>
      </>
    );
  };

  return (
    <>
      <EmailNotVerifiedBanner onlyInfo />
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
    </>
  );
}
