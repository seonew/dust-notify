"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import CardList from "@/components/CardList";

export default function Favorites() {
  const list = useSelector((state: RootState) => state.favorite.items);

  return (
    <div className="content-view">
      <main className="flex-col-h-full w-screen">
        <div className="flex-col-h-full items-center overflow-y-auto">
          <CardList
            list={list}
            emptyNode={
              <p className="m-auto">즐겨찾기 지역을 추가해 주세요. 😊</p>
            }
          />
        </div>
      </main>
    </div>
  );
}
