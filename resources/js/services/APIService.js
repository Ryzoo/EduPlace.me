import axios from 'axios';

const defaultSettings = {
  baseURL: 'http://localhost:8000/api/',
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

export const getSearchResults = async (data) => {
  return await resolve(
    axios.get(`${defaultSettings.baseURL}search/${data}`).then((res) => res.data)
  );
};
