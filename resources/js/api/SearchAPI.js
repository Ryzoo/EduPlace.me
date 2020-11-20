import HttpClient from '../helpers/HttpClient';

export class SearchAPI {
  static getSearchResults(text) {
    return HttpClient.get(`search/${text}`);
  }
}
