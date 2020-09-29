import React from 'react'
import {useSelector} from 'react-redux'
import {
  getLanguage
} from '../../store/features/pageSettings/pageSettings'
import {Empty} from "antd";

export default function MainPage() {
  const language = useSelector(getLanguage)

  return (
    <div>
      <div>
        current: <b>{language}</b>
        <Empty/>
      </div>
    </div>
  )
}