"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setSidoName, update } from "@/lib/redux/features/list";
import CardList from "@/components/CardList";
import useData from "@/hooks/use-data";
import { useEffect } from "react";
import { EMPTY_DATA_MESSAGE, SIDO_NAMES } from "@/utils/constants";
import SelectBox from "@/components/SelectBox";
import Loading from "@/components/Loading";

export default function Home() {
  const list = useSelector((state: RootState) => state.list.items);
  const sidoName = useSelector((state: RootState) => state.list.sidoName);
  const dispatch = useDispatch();
  const data = useData(sidoName);
  const emptyCSS = list === undefined ? "h-full" : "";

  const handleChangeItem = (item: string) => {
    dispatch(setSidoName(item));
    dispatch(update({ list: [], total: 0 }));
  };

  useEffect(() => {
    if (list === undefined || list.length === 0) {
      dispatch(update(data));
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
        <div className="content-view overflow-auto">
          <main className={`flex flex-col justify-center w-screen ${emptyCSS}`}>
            <div className="p-2 flex items-center justify-center w-full">
              <div className="w-2/4">
                <SelectBox
                  selectedItem={sidoName}
                  items={SIDO_NAMES}
                  onChange={handleChangeItem}
                />
              </div>
            </div>
            <div className="flex flex-col items-center m-auto">
              <CardList list={list} emptyNode={<p>{EMPTY_DATA_MESSAGE}</p>} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
