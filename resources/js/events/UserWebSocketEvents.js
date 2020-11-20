import { notification } from 'antd';

export class UserWebSocketEvents {
  static initialize(echoInstance, user, t) {
    echoInstance.private('App.Models.User.' + user.id).notification((data) => {
      notification['info']({
        message: t['New notification!'],
        description: data.message,
      });
      // TODO:
      //  jak ogarniesz mocno stora to tutaj fajnie jak z tego miejsca
      //  dodawala sie wpis nowy na gore do user.notifications.list
    });
  }
}
