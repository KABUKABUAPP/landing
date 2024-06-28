import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { guarantorsApi } from "@/api-services/guarantors";
import { referralsApi } from "@/api-services/referrals";

export const reduxStore = configureStore({
  reducer: {
    [guarantorsApi.reducerPath]: guarantorsApi.reducer,
    [referralsApi.reducerPath]: referralsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([guarantorsApi.middleware, referralsApi.middleware]),
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
