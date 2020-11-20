import { asyncActions } from './asyncActions';
import { createSlice } from '@reduxjs/toolkit';
import { extraReducers, reducers } from './reducers';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: null,
    isVerified: false,
    name: '',
    notifications: {
      count: 0,
      list: [],
    },
  },
  reducers: reducers,
  extraReducers: extraReducers,
});

// definiujemy jak ma sie zmieniac poczatkowy stan przy wczytaniu danych z servera
export const userDefaultValueProvider = (serverData) =>
  serverData.auth && serverData.auth.user
    ? {
        id: serverData.auth.user.id,
        email: serverData.auth.user.email,
        isVerified: serverData.auth.isVerified,
        name: serverData.auth.user.name,
        notifications: {
          count: serverData.notifications.unreadCount,
          list: serverData.notifications.list,
        },
      }
    : {};

export const userActions = userSlice.actions;
export const userAsyncActions = asyncActions;

export const userReducer = userSlice.reducer;
