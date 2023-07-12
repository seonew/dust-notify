"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import CardList from "@/components/CardList";

export default function Favorites() {
  const list = useSelector((state: RootState) => state.favorite.items);

  return (
    <div className="content-view">
      <main className="h-full-w-screen">
        <div className="h-full-w-screen">
          <CardList
            items={list}
            emptyNode={
              <p className="m-auto">즐겨찾기 지역을 추가해 주세요. 😊</p>
            }
          />
        </div>
      </main>
    </div>
  );
}
