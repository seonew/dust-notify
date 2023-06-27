"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { setSidoName, update } from "./GlobalRedux/Features/list";
import { SIDO_NAMES } from "@/utils/common";
import CardList from "@/components/CardList";
import useData from "./hooks/use-data";
import { useEffect } from "react";

export default function Home() {
  const list = useSelector((state: RootState) => state.list.items);
  const sidoName = useSelector((state: RootState) => state.list.sidoName);
  const dispatch = useDispatch();
  const data = useData(sidoName);
  const fixedCSS = "fixed top-0 left-0 right-0 bottom-16 overflow-auto";
  const emptyCSS = list === undefined ? "h-full" : "";

  const handleChangeItem = (e) => {
    dispatch(setSidoName(e.target.value));
    dispatch(update({ list: [], total: 0 }));
  };

  useEffect(() => {
    if (list === undefined || list.length === 0) {
      dispatch(update(data));
    }
  }, [data, dispatch, list]);

  return (
    <div className={`${fixedCSS}`}>
      <main className={`flex flex-col justify-center w-screen ${emptyCSS}`}>
        {data.isLoading ? (
          <p className="flex items-center justify-center">loading</p>
        ) : (
          <>
            <div className="p-2 flex items-center justify-center">
              <select onChange={handleChangeItem} value={sidoName}>
                {SIDO_NAMES.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center m-auto">
              <CardList
                list={list}
                emptyNode={<p>일시적으로 데이터를 불러올 수 없어요.</p>}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
