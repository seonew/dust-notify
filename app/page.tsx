"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import useData from "./hooks/use-data";
import { useEffect, useState } from "react";
import { update } from "./GlobalRedux/Features/list";
import { area } from "@/utils/common";
import Card from "@/components/Card";
import BottomTabs from "@/components/BottomTabs";

export default function Home() {
  const list = useSelector((state: RootState) => state.list.items);
  const dispatch = useDispatch();
  const [sidoName, setSidoName] = useState("서울");
  const data = useData(sidoName);

  const handleChangeItem = (e) => {
    setSidoName(e.target.value);
    dispatch(update({ list: [], total: 0 }));
  };

  useEffect(() => {
    if (list === undefined || list.length === 0) {
      dispatch(update(data));
    }
  }, [data, dispatch, list]);

  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="p-2 flex items-center justify-center">
        <select onChange={handleChangeItem}>
          {area.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center">
        {list &&
          list?.map((item, index) => {
            return (
              <div key={index}>
                <Card item={item} />
              </div>
            );
          })}
      </div>
      <BottomTabs />
    </main>
  );
}
