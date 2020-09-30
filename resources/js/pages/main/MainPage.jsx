import React from 'react'
import {useSelector} from 'react-redux'
import {
  getLanguage
} from '../../store/features/pageSettings/pageSettings'
import {Empty, DatePicker, Slider} from "antd";
import dayjs from "dayjs";

export default function MainPage() {
  const language = useSelector(getLanguage)

  return (
    <div>
      <div>
        <Slider defaultValue={30} />
        <DatePicker />
        {dayjs(dayjs().subtract(2, 'year')).fromNow()}
        current: <b>{language}</b>
        <Empty/>
      </div>
    </div>
  )
}