"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { setSidoName, update } from "./GlobalRedux/Features/list";
import { area } from "@/utils/common";
import CardList from "@/components/CardList";
import useData from "./hooks/use-data";

export default function Home() {
  const sidoName = useSelector((state: RootState) => state.list.sidoName);
  const dispatch = useDispatch();
  const { isLoading } = useData(sidoName);
  const fixedCSS = "fixed top-0 left-0 right-0 bottom-16 overflow-auto";

  const handleChangeItem = (e) => {
    dispatch(setSidoName(e.target.value));
    dispatch(update({ list: [], total: 0 }));
  };

  return (
    <div className={`${fixedCSS}`}>
      <main className={`flex min-h-screen flex-col justify-center`}>
        {isLoading ? (
          <p className="flex items-center justify-center">loading</p>
        ) : (
          <div className="p-2 flex items-center justify-center">
            <select onChange={handleChangeItem} value={sidoName}>
              {area.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}
        <CardList />
      </main>
    </div>
  );
}
