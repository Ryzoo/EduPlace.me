import { configureStore } from '@reduxjs/toolkit';
import { userDefaultValueProvider, userReducer } from './features/user';

const prepareServerDataToStore = (serverData) => {
  return {
    user: userDefaultValueProvider(serverData),
  };
};

export default function buildStore(serverData) {
  console.log(serverData);
  return configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState: prepareServerDataToStore(serverData),
  });
}
