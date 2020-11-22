export default class HttpClient {
  static head(url, config = {}) {
    return HttpClient.makeRequest(HttpMethod.HEAD, url, {}, config);
  }

  static post(url, formData = {}, config = {}) {
    return HttpClient.makeRequest(HttpMethod.POST, url, formData, config);
  }

  static get(url, config = {}) {
    return HttpClient.makeRequest(HttpMethod.GET, url, {}, config);
  }

  static put(url, formData = {}, config = {}) {
    return HttpClient.makeRequest(HttpMethod.PUT, url, formData, config);
  }

  static delete(url, config = {}) {
    return HttpClient.makeRequest(HttpMethod.DELETE, url, {}, config);
  }

  static makeRequest(method, url, formData = {}, config = {}) {
    return new Promise((resolve, rejected) => {
      window.axios.defaults.headers.common.Authorization = `Bearer ${window.serverData.jwt}`;

      switch (method) {
        case HttpMethod.POST:
          return resolve(window.axios.post(url, formData, config));
        case HttpMethod.PUT:
          return resolve(window.axios.put(url, formData, config));
        case HttpMethod.DELETE:
          return resolve(window.axios.delete(url, config));
        case HttpMethod.GET:
          return resolve(window.axios.get(url, config));
        case HttpMethod.HEAD:
          return resolve(window.axios.head(url, config));
      }

      const errorMessage = 'Wrong API request method.';
      console.error(errorMessage);
      return rejected(HttpResponseError(errorMessage));
    });
  }
}

export const HttpMethod = {
  POST: 'POST',
  GET: 'GET',
  DELETE: 'DELETE',
  PUT: 'PUT',
  HEAD: 'HEAD',
};

const HttpResponseError = (message) => {
  this.message = message;
  this.name = 'HttpResponseError';
};
