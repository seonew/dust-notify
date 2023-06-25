import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { update } from "@/app/GlobalRedux/Features/list";
import useData from "@/app/hooks/use-data";

const CardList = () => {
  const list = useSelector((state: RootState) => state.list.items);
  const sidoName = useSelector((state: RootState) => state.list.sidoName);
  const data = useData(sidoName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (list === undefined || list.length === 0) {
      dispatch(update(data));
    }
  }, [data, dispatch, list]);

  return (
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
  );
};

export default CardList;
