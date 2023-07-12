"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import useMyData from "@/hooks/use-my-data";
import {
  initializeSidoNameChange,
  setStationName,
  updateList,
  updateSidoNameChange,
} from "@/lib/redux/features/mypage";
import {
  EMPTY_DATA_MESSAGE,
  SIDO_NAMES,
  STATION_NAMES,
} from "@/utils/constants";
import CardList from "@/components/CardList";
import SelectBox from "@/components/SelectBox";
import Loading from "@/components/Loading";

export default function Mypage() {
  const list = useSelector((state: RootState) => state.mypage.items);
  const sidoName = useSelector((state: RootState) => state.mypage.sidoName);
  const stationName = useSelector(
    (state: RootState) => state.mypage.stationName
  );

  const data = useMyData(sidoName, stationName);
  const dispatch = useDispatch();

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

  const EmptyNode = <p className="m-auto">{EMPTY_DATA_MESSAGE}</p>;

  useEffect(() => {
    if (list === undefined || list?.length === 0) {
      dispatch(updateList(data));
    }
  }, [data, dispatch, list]);

  return (
    <>
      {data.isLoading ? (
        <>
          <Loading />
          <div className="loading-overlay"></div>
        </>
      ) : (
        <div className="content-view">
          <main className="h-full-w-screen">
            {AreaSelectBox}

            <div className="h-full-w-screen overflow-y-auto">
              <CardList items={list} emptyNode={EmptyNode} isHidden={true} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
