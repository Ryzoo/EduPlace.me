import axios from 'axios';

const defaultSettings = {
  baseURL: 'https://eduplace.me/',
  responseType: 'json',
};

const resolve = async (promise) => {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
};

export const test = async (data) => {
  return await resolve(axios.post(defaultSettings.baseURL, { data }).then((res) => res.data));
};
