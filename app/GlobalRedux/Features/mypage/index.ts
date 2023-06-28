"use client";

import { createSlice } from "@reduxjs/toolkit";

export type ItemState = {
  sidoName: string;
  stationName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
};

export interface ListState {
  items: ItemState[];
  sidoName: string;
  stationName: string;
}

const initialState: ListState = {
  items: [],
  sidoName: "서울",
  stationName: "종로구",
};

export const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {
    setSidoName: (state, action) => {
      state.sidoName = action.payload;
    },
    setStationName: (state, action) => {
      state.stationName = action.payload;
    },
    updateList: (state, action) => {
      state.items = action.payload.list;
    },
    initializeSidoNameChange: (state) => {
      state.items = [];
    },
    updateSidoNameChange: (state, action) => {
      state.items = [];
      state.sidoName = action.payload;
    },
  },
});

export const {
  updateList,
  setSidoName,
  setStationName,
  initializeSidoNameChange,
  updateSidoNameChange,
} = mypageSlice.actions;
export default mypageSlice.reducer;
