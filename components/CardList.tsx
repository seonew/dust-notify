"use client";

import React, { ReactNode } from "react";
import Card from "./Card";

type CardListType = {
  list: any;
  emptyNode?: ReactNode;
};
const CardList = ({ list, emptyNode }: CardListType) => {
  return (
    <>
      {list?.length > 0
        ? list &&
          list?.map((item, index) => {
            return (
              <div key={index}>
                <Card item={item} />
              </div>
            );
          })
        : emptyNode}
    </>
  );
};

export default CardList;
