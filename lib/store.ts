"use client";

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./redux/features/list/index";
import favoriteReducer from "./redux/features/favorite/index";
import mypageReducer from "./redux/features/mypage/index";

export const store = configureStore({
  reducer: {
    list: listReducer,
    favorite: favoriteReducer,
    mypage: mypageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
