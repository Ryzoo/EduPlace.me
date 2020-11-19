import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    notifications: {
      count: 0,
      list: [],
    },
  },
});

export const authUser = (state) => state.user;
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

export default userSlice.reducer;
