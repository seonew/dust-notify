"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import useData from "./hooks/use-data";
import { useEffect } from "react";
import { update } from "./GlobalRedux/Features/list";
import { getBackgroundColor, getTextColor, getTextGrade } from "@/utils/common";

export default function Home() {
  const list = useSelector((state: RootState) => state.list.items);
  const dispatch = useDispatch();
  const data = useData();

  useEffect(() => {
    dispatch(update(data));
  }, [data, dispatch]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>test</h1>
      <div>
        {list &&
          list?.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-between p-1 m-2 w-72 h-32 text-center rounded 
                text-white ${getBackgroundColor(item.pm10Grade)}`}
              >
                <div className={`p-1`}>
                  <span>{item.sidoName}&nbsp;</span>
                  <span>{item.stationName}</span>
                </div>
                <div className={`p-1`}>
                  <span
                    className={`text-2xl rounded p-1 
                    bg-white ${getTextColor(item.pm10Grade)}`}
                  >
                    {getTextGrade(item.pm10Grade)}
                  </span>
                </div>
                <div className="p-1 text-xs">
                  <p>미세먼지 수치: {item.pm10Value}</p>
                  <p>({item.dataTime} 기준)</p>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
