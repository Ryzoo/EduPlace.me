import HttpClient from '../helpers/HttpClient';

export class UserAPI {
  static makeNotificationsAsRead() {
    return HttpClient.put(window.serverData.routes.user.notificationsRead);
  }
}
