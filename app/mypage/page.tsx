"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import CardList from "@/components/CardList";
import useMyData from "../hooks/use-my-data";
import { useEffect } from "react";
import {
  initializeSidoNameChange,
  setStationName,
  updateList,
  updateSidoNameChange,
} from "../GlobalRedux/Features/mypage";
import SelectBox from "@/components/SelectBox";
import {
  EMPTY_DATA_MESSAGE,
  SIDO_NAMES,
  STATION_NAMES,
} from "@/utils/constants";

export default function Mypage() {
  const list = useSelector((state: RootState) => state.mypage.items);
  const sidoName = useSelector((state: RootState) => state.mypage.sidoName);
  const stationName = useSelector(
    (state: RootState) => state.mypage.stationName
  );

  const data = useMyData(sidoName, stationName);
  const dispatch = useDispatch();
  const flexCSS = "flex flex-col items-center h-full";
  const fixedCSS = "fixed left-0 top-0 right-0 bottom-16";

  const handleChangeSidoName = (item) => {
    dispatch(updateSidoNameChange(item));
    handleChangeStationName(STATION_NAMES[item][0]);
  };

  const handleChangeStationName = (item) => {
    dispatch(setStationName(item));
    dispatch(initializeSidoNameChange());
  };

  const AreaSelectBox = (
    <div className="p-2 flex items-center justify-center w-full">
      <div className="pr-1.5 w-1/4">
        <SelectBox
          selectedItem={sidoName}
          items={SIDO_NAMES}
          onChange={handleChangeSidoName}
        />
      </div>
      <div className="w-2/4">
        <SelectBox
          selectedItem={stationName}
          items={STATION_NAMES[sidoName]}
          onChange={handleChangeStationName}
        />
      </div>
    </div>
  );

  useEffect(() => {
    if (list === undefined || list?.length === 0) {
      dispatch(updateList(data));
    }
  }, [data, dispatch, list]);

  return (
    <div className={`${fixedCSS}`}>
      <main className={`${flexCSS} w-screen`}>
        {AreaSelectBox}

        {data.isLoading ? (
          <p className="m-auto">loading</p>
        ) : (
          <div className={`${flexCSS} overflow-y-auto`}>
            <CardList
              list={list}
              emptyNode={<p className="m-auto">{EMPTY_DATA_MESSAGE}</p>}
            />
          </div>
        )}
      </main>
    </div>
  );
}
