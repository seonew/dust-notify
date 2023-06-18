"use client";

import { createSlice } from "@reduxjs/toolkit";

export type FavoriteState = {
  sidoName: string;
  stationName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
  isFavorite: boolean;
};

export interface FavoritesState {
  items: FavoriteState[];
}

const initialState: FavoritesState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    update: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { update } = favoriteSlice.actions;
export default favoriteSlice.reducer;
