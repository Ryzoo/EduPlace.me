import { message } from 'antd';

export class UserWebSocketEvents {
  static initialize(echoInstance, user) {
    echoInstance.private('App.Models.User.' + user.id).notification((notification) => {
      message.info(notification.message);
      // TODO:
      //  jak ogarniesz mocno stora to tutaj fajnie jak z tego miejsca
      //  dodawala sie wpis nowy na gore do user.notifications.list
    });
  }
}
