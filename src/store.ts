import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appSlice } from "./slice/appSlice";
import { usersApi } from "./features/Users/api/usersApi";
import { messageApi } from "./features/Users/api/messageApi";

// @ts-ignore
const localStorageMiddleware = ({ getState }) => {
  // @ts-ignore
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(<string>localStorage.getItem("applicationState")); // re-hydrate the store
  }
};

export const store = configureStore({
  preloadedState: reHydrateStore(),

  reducer: {
    [appSlice.name]: appSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      messageApi.middleware,
      localStorageMiddleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
