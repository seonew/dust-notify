"use client";

import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import Card from "@/components/Card";

export default function Favorites() {
  const list = useSelector((state: RootState) => state.favorite.items);
  const flexCSS = "flex flex-col h-full";
  const fixedCSS = "fixed left-0 top-0 right-0 bottom-16";

  return (
    <div className={`${fixedCSS}`}>
      <main className={`${flexCSS} w-screen`}>
        {!list || list.length === 0 ? (
          <div className={`${flexCSS} items-center`}>
            <p className="m-auto">즐겨찾기 지역을 추가해 주세요. 😊</p>
          </div>
        ) : (
          <div className={`${flexCSS} items-center overflow-y-auto`}>
            {list &&
              list?.map((item, index) => {
                return (
                  <div key={index}>
                    <Card item={item} />
                  </div>
                );
              })}
          </div>
        )}
      </main>
    </div>
  );
}
