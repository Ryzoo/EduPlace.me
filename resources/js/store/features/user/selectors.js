export const authUser = (state) => state.user;
export const userNotifications = (state) => ({
  isAnyNotifications: !!state.user.notifications.list.length,
  notifications: state.user.notifications.list,
});
