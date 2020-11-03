import { Layout, Menu } from 'antd';
import { Logo } from '../../components/layouts/logo/Logo';
import { ServerDataContext, ThemeContext } from '../../context/index';
import React, { useContext } from 'react';
import StringService from '../../services/StringService';
import URLService from '../../services/URLService';
import './OneSideLayout.scss';

const { Content, Header } = Layout;
const { SubMenu } = Menu;
export default function OneSideLayout(props) {
  const { routes, language } = useContext(ServerDataContext);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <Header
        style={{
          background: 'transparent',
          position: 'fixed',
          width: '100%',
        }}
        className={StringService.logicConcat({
          dark: isDarkTheme,
        })}
      >
        <Logo dark={!props.blackOnLeft} />
        <Menu className="float-right" mode="horizontal">
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
      </Header>
      <Layout
        className={StringService.logicConcat('one-side-layout', {
          dark: isDarkTheme,
        })}
      >
        <Content className={props.blackOnLeft ? 'black-side' : 'light-side'}>
          {props.blackOnLeft ? props.description : props.children}
        </Content>
        <Content className={props.blackOnLeft ? 'light-side' : 'black-side'}>
          {props.blackOnLeft ? props.children : props.description}
        </Content>
      </Layout>
    </>
  );
}
