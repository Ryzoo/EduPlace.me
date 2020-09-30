import React from 'react'
import {render} from 'react-dom'
import {Provider, useSelector} from 'react-redux'
import 'antd/dist/antd.less'
import buildStore from "./store/index";
import {ConfigProvider} from 'antd';
import enLanguageData from 'antd/es/locale/en_US';
import plLanguageData from 'antd/es/locale/pl_PL';
import enDayJsData from 'dayjs/locale/en';
import plDayJsData from 'dayjs/locale/pl';
import {getLanguage} from "./store/features/pageSettings/pageSettings";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function buildApp(renderLayout) {
  render(
    <Provider store={buildStore(window.serverData)}>
      <LanguagePropagator>
        {renderLayout}
      </LanguagePropagator>
    </Provider>,
    document.getElementById('app')
  )
}

export function LanguagePropagator(props) {
  const language = useSelector(getLanguage)
  dayjs.locale(language)
  dayjs.extend(relativeTime)

  const getLanguageDate = () => {
    switch (language){
      case 'pl':
        return plLanguageData
      case 'en':
        return enLanguageData
      default:
        return enLanguageData
    }
  }

  return (
    <ConfigProvider locale={getLanguageDate()}>
      {props.children}
    </ConfigProvider>
  )
}