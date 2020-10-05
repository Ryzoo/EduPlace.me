import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../store/features/user/user';
import { userDefaultValueProvider } from './features/user/user';

const prepareServerDataToStore = (serverData) => {
  console.log(serverData);
  return {
    user: userDefaultValueProvider(serverData),
  };
};

export default function buildStore(serverData) {
  return configureStore({
    reducer: {
      user: userSlice,
    },
    preloadedState: prepareServerDataToStore(serverData),
  });
}
