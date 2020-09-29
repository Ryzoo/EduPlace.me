import { configureStore } from '@reduxjs/toolkit'
import pageSettingsSlice from '../store/features/pageSettings/pageSettings'
import userSlice from '../store/features/user/user'
import DefaultStateParserService from "../services/DefaultStateParserService";

export default function buildStore(serverData){
  return configureStore({
    reducer: {
      pageSettings: pageSettingsSlice,
      user: userSlice,
    },
    preloadedState: DefaultStateParserService.parseDataFromServerToState(serverData)
  })
}