"use client";

import React, { ReactNode } from "react";
import Card from "./Card";
import { FavoriteState } from "@/lib/redux/features/favorite";
import { ItemState } from "@/lib/redux/features/list";

type CardListType = {
  items: FavoriteState[] | ItemState[];
  emptyNode?: ReactNode;
  isHidden?: boolean;
};
const CardList = ({ items, emptyNode, isHidden }: CardListType) => {
  return (
    <>
      {items?.length > 0
        ? items &&
          items?.map((item) => {
            return (
              <div key={`${item.sidoName}_${item.stationName}`}>
                <Card item={item} isHidden={isHidden} />
              </div>
            );
          })
        : emptyNode}
    </>
  );
};

export default CardList;
