import { ConfigProvider, message } from 'antd';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ServerDataContext, ThemeContextProvider } from './context/index';
import { UserWebSocketEvents } from './events/index';
import { render } from 'react-dom';
import { userSelectors } from './store/features/selectors';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import React, { useContext } from 'react';
import axios from 'axios';
import buildStore from './store/index';
import dayjs from 'dayjs';
import enLanguageData from 'antd/es/locale/en_US';
import plLanguageData from 'antd/es/locale/pl_PL';
import relativeTime from 'dayjs/plugin/relativeTime';

window.axios = axios;
window.axios.defaults.baseURL = '/api/';

export default function buildApp(renderLayout) {
  render(
    <Provider store={buildStore(window.serverData)}>
      <ServerDataContext.Provider value={window.serverData}>
        <ThemeContextProvider>
          <PageStatusPropagator>
            <LanguagePropagator>
              <WebSocketEventInitializer>{renderLayout}</WebSocketEventInitializer>
            </LanguagePropagator>
          </PageStatusPropagator>
        </ThemeContextProvider>
      </ServerDataContext.Provider>
    </Provider>,
    document.getElementById('app')
  );
}

function WebSocketEventInitializer(props) {
  const { t } = useContext(ServerDataContext);
  const user = useSelector(userSelectors.authUser);
  const dispatch = useDispatch();

  Pusher.logToConsole = true;

  const echoInstance = new Echo({
    broadcaster: 'pusher',
    key: 'c5baa09791c9d560d06d',
    cluster: 'eu',
  });

  if (user.id) UserWebSocketEvents.initialize(echoInstance, user, t, dispatch);

  return <section>{props.children}</section>;
}

function LanguagePropagator(props) {
  const { language } = useContext(ServerDataContext);
  dayjs.locale(language);
  dayjs.extend(relativeTime);

  const getLanguageDate = () => {
    switch (language) {
      case 'pl':
        return plLanguageData;
      case 'en':
        return enLanguageData;
      default:
        return enLanguageData;
    }
  };

  return <ConfigProvider locale={getLanguageDate()}>{props.children}</ConfigProvider>;
}

function PageStatusPropagator(props) {
  const { success, error } = useContext(ServerDataContext);

  setTimeout(() => {
    if (success && success.length) message.success(success);
    if (error && error.length) message.error(error);
  }, 100);

  return props.children;
}
