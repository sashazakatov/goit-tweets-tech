import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tweetsReducer, tweetsPersistConfig } from "./tweets/slice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
];

export const store = configureStore({
    reducer:{
        tweets: persistReducer( tweetsPersistConfig, tweetsReducer),
    },
    middleware,
})
export const persistor = persistStore(store);