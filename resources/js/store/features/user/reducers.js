import { asyncActions } from './asyncActions';

export const reducers = {
  addNewNotification(state, action) {
    state.notifications.list.unshift(action.payload);
    state.notifications.count += 1;
  },
};

export const extraReducers = (builder) => {
  builder.addCase(asyncActions.makeNotificationsAsRead.fulfilled, (state) => {
    state.notifications.count = 0;
    state.notifications.list = state.notifications.list.map((x) => ({
      ...x,
      isNew: false,
    }));
  });
};
