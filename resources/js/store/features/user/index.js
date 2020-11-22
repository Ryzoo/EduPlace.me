import { asyncActions } from './asyncActions';
import { createSlice } from '@reduxjs/toolkit';
import { extraReducers, reducers } from './reducers';

const initialState = {
  id: null,
  email: null,
  isVerified: false,
  name: '',
  notifications: {
    count: 0,
    list: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: reducers,
  extraReducers: extraReducers,
});

export const userDefaultValueProvider = (serverData) => {
  try {
    return {
      ...initialState,
      id: serverData.auth.user.id,
      email: serverData.auth.user.email,
      isVerified: serverData.auth.isVerified,
      name: serverData.auth.user.name,
      notifications: {
        count: serverData.notifications.unreadCount,
        list: serverData.notifications.list,
      },
    };
  } catch (e) {
    return initialState;
  }
};

export const userActions = userSlice.actions;
export const userAsyncActions = asyncActions;

export const userReducer = userSlice.reducer;
