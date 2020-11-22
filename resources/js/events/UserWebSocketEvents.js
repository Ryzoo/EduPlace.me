import { notification } from 'antd';
import { userActions } from '../store/features/user';

export class UserWebSocketEvents {
  static initialize(echoInstance, user, t, dispatch) {
    echoInstance.private('App.Models.User.' + user.id).notification((data) => {
      notification['info']({
        message: t['New notification!'],
        description: data.message,
      });

      dispatch(
        userActions.addNewNotification({
          message: data.message,
          isNew: true,
        })
      );
    });
  }
}
