"use client";

import React, { ReactNode } from "react";
import Card from "./Card";

type CardListType = {
  list: any;
  emptyNode?: ReactNode;
  isHidden?: boolean;
};
const CardList = ({ list, emptyNode, isHidden }: CardListType) => {
  return (
    <>
      {list?.length > 0
        ? list &&
          list?.map((item, index) => {
            return (
              <div key={index}>
                <Card item={item} isHidden={isHidden} />
              </div>
            );
          })
        : emptyNode}
    </>
  );
};

export default CardList;
