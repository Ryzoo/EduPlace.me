import HttpClient from '../helpers/HttpClient';

export class BoardAPI {
  static toggleLike(boardId) {
    return HttpClient.put(window.serverData.apiRoutes.toggleLikeBoard.replace('id', boardId));
  }
}
