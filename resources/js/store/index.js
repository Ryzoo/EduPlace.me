import { configureStore } from '@reduxjs/toolkit';
import { searchDefaultValueProvider, searchReducer } from './features/search';
import { userDefaultValueProvider, userReducer } from './features/user';

const prepareServerDataToStore = (serverData) => {
  return {
    user: userDefaultValueProvider(serverData),
    search: searchDefaultValueProvider(serverData),
  };
};

export default function buildStore(serverData) {
  console.log(serverData);
  return configureStore({
    reducer: {
      user: userReducer,
      search: searchReducer,
    },
    preloadedState: prepareServerDataToStore(serverData),
  });
}
