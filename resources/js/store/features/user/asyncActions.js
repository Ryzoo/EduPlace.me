import { UserAPI } from '../../../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncActions = {
  makeNotificationsAsRead: createAsyncThunk('user/makeNotificationsAsRead', async () => {
    await UserAPI.makeNotificationsAsRead();
  }),
};
