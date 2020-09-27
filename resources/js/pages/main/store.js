import { configureStore } from '@reduxjs/toolkit'
import exampleSlice from '../../store/example'
import userSlice from '../../store/user'

export default configureStore({
  reducer: {
    user: userSlice,
    example: exampleSlice
  }
})