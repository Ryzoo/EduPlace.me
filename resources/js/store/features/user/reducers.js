import { asyncActions } from './asyncActions';

export const reducers = {};

export const extraReducers = (builder) => {
  builder.addCase(asyncActions.makeNotificationsAsRead.fulfilled, (state) => {
    state.notifications.count = 0;
    state.notifications.list = state.notifications.list.map((x) => ({
      ...x,
      isNew: false,
    }));
  });
};
