"use client";

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Features/list/index";
import favoriteReducer from "./Features/favorite/index";

export const store = configureStore({
  reducer: {
    list: listReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
