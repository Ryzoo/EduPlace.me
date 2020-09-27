import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import MainPage from './MainPage'

const index = document.getElementById('app')
const serverData = window.serverData

render(
  <Provider store={store}>
    <MainPage {...serverData} />
  </Provider>,
  index
)