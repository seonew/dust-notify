"use client";

import { createSlice } from "@reduxjs/toolkit";

export type ItemState = {
  sidoName: string;
  stationName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
  isFavorite?: boolean;
};

export interface ListState {
  total: number;
  items: ItemState[];
  sidoName: string;
}

const initialState: ListState = {
  total: 0,
  items: [],
  sidoName: "서울",
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setSidoName: (state, action) => {
      state.sidoName = action.payload;
    },
    update: (state, action) => {
      state.items = action.payload.list;
      state.total = action.payload.total;
    },
    addIsFavoriteToItem: (state, action) => {
      const { stationName, isFavorite } = action.payload;
      const foundItem = state.items.find(
        (item) => item.stationName === stationName
      );

      if (foundItem) {
        foundItem.isFavorite = isFavorite;
      }
    },
  },
});

export const { update, addIsFavoriteToItem, setSidoName } = listSlice.actions;
export default listSlice.reducer;
