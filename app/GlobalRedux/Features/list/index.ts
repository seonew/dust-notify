"use client";

import { createSlice } from "@reduxjs/toolkit";

type itemState = {
  sidoName: string;
  stationName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
};

export interface ListState {
  total: number;
  items: itemState[];
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
  },
});

export const { update } = listSlice.actions;
export default listSlice.reducer;
