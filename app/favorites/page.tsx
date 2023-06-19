"use client";

import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import Card from "@/components/Card";
import BottomTabs from "@/components/BottomTabs";

export default function Favorites() {
  const list = useSelector((state: RootState) => state.favorite.items);

  return (
    <main className="flex min-h-screen flex-col justify-center">
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
      <BottomTabs />
    </main>
  );
}
