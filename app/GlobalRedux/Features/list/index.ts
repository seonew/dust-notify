"use client";

import { createSlice } from "@reduxjs/toolkit";

export type ItemState = {
  sidoName: string;
  stationName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
  isFavorite: boolean;
};

export interface ListState {
  total: number;
  items: ItemState[];
}

const initialState: ListState = {
  total: 0,
  items: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    update: (state, action) => {
      state.items = action.payload.list;
      state.total = action.payload.total;
    },
    updateFavorite: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { update, updateFavorite } = listSlice.actions;
export default listSlice.reducer;
