import { Badge, Button, Drawer, Layout, Menu } from 'antd';
import { CurrentUserNotificationsList } from '../../components/layouts/CurrentUserNotificationsList';
import { EmailNotVerifiedBanner } from '../../components/layouts/EmailNotVerifiedBanner';
import { Icon } from '../../components/shared/icon/Icon';
import { Logo } from '../../components/layouts/logo/Logo';
import { ServerDataContext, ThemeContext } from '../../context/index';
import { StringService, URLService } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { userAsyncActions } from '../../store/features/user';
import { userSelectors } from '../../store/features/selectors';
import React, { useContext, useState } from 'react';
import './SearchLayout.scss';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function SearchLayout(props) {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [notificationDrawerVisibility, setNotificationDrawerVisibility] = useState(false);
  const { routes, language, t } = useContext(ServerDataContext);
  const user = useSelector(userSelectors.authUser);
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

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
  ];

  const getUserMenu = () => (
    <SubMenu
      popupClassName={StringService.logicConcat({
        dark: isDarkTheme,
      })}
      icon={<i className="far fa-user mr-2" />}
      title={<span className="pr-3">{user.name}</span>}
    >
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
                if (nav.url) URLService.goTo(nav.url);
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
        <Drawer
          className={StringService.logicConcat({
            dark: isDarkTheme,
          })}
          title={t['Notifications']}
          width={300}
          placement="right"
          closable={false}
          visible={notificationDrawerVisibility}
          onClose={() => {
            setNotificationDrawerVisibility(false);
          }}
        >
          <CurrentUserNotificationsList />
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
            <Menu.Item
              key="notifcations"
              onClick={() => {
                setNotificationDrawerVisibility(true);
                if (user.notifications.count > 0)
                  dispatch(userAsyncActions.makeNotificationsAsRead());
              }}
            >
              <Badge count={user.notifications.count}>
                <Icon className="notifications" regular name="fa-bell" />
              </Badge>
            </Menu.Item>
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
