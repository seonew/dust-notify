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
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      const nextItems = state.items.filter(
        (favorite) => favorite.stationName !== action.payload
      );
      state.items = nextItems;
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
