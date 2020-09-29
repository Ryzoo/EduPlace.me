import { createSlice } from '@reduxjs/toolkit'

export const pageSettingsSlice = createSlice({
  name: 'pageSettings',
  initialState: {
    language: 'en'
  },
  reducers: { }
})

//actions
export const { } = pageSettingsSlice.actions

//gets
export const getLanguage = state => state.pageSettings.language

export default pageSettingsSlice.reducer