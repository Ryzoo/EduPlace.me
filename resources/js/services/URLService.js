import { FormService } from './FormService';

export class URLService {
  static goTo(address, urlMethod = URLMethod.GET) {
    switch (urlMethod) {
      case URLMethod.GET:
        document.location.href = address;
        break;
      default:
        FormService.submit(address, URLMethod.DELETE);
    }
  }

  static asset(assetUrl) {
    return `/${assetUrl}`;
  }
}

export const URLMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};
