import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../store/features/user/user'

export default function buildStore(){
  return configureStore({
    reducer: {
      user: userSlice,
    },
  })
}