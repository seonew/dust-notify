"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "@/lib/store";
import { setSidoName, update } from "@/lib/redux/features/list";
import useData from "@/hooks/use-data";
import { EMPTY_DATA_MESSAGE, SIDO_NAMES } from "@/utils/constants";
import CardList from "@/components/CardList";
import SelectBox from "@/components/SelectBox";
import Loading from "@/components/Loading";

export default function Home() {
  const list = useSelector((state: RootState) => state.list.items);
  const sidoName = useSelector((state: RootState) => state.list.sidoName);
  const dispatch = useDispatch();
  const data = useData(sidoName);

  const handleChangeItem = (item: string) => {
    dispatch(setSidoName(item));
    dispatch(update({ list: [], total: 0 }));
  };

  useEffect(() => {
    if (list === undefined || list.length === 0) {
      dispatch(update(data));
    }
  }, [data, dispatch, list]);

  const EmptyNode = <p className="m-auto">{EMPTY_DATA_MESSAGE}</p>;

  return (
    <>
      {data.isLoading ? (
        <>
          <Loading />
          <div className="loading-overlay"></div>
        </>
      ) : (
        <div className="content-view">
          <main className={clsx("h-full-w-screen")}>
            <div className="p-2 flex items-center justify-center w-full">
              <div className="w-2/4">
                <SelectBox
                  selectedItem={sidoName}
                  items={SIDO_NAMES}
                  onChange={handleChangeItem}
                />
              </div>
            </div>
            <div className="h-full-w-screen overflow-y-auto">
              <CardList items={list} emptyNode={EmptyNode} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
