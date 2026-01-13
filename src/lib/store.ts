import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timerSlice"
import { publicApi } from "./features/apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      timer: timerReducer,
      [publicApi.reducerPath]: publicApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(publicApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
