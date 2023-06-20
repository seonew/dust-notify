"use client";

import { MapPinIcon, MapIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const BottomTabs = () => {
  const tabCSS = "w-full h-full flex items-center justify-center";
  const iconCSS = "w-5 h-5 m-auto";
  const activeCSS = "text-green-500 font-semibold";
  const [active, setActive] = useState("1");

  const handleClickItem = (current) => () => {
    setActive(current);
  };

  return (
    <div className="flex items-center justify-between h-16 text-sm sticky bottom-0 z-50 bg-white divide-x shadow-2xl">
      <Link
        href="/"
        className={`${tabCSS} ${active === "1" ? activeCSS : ""}`}
        onClick={handleClickItem("1")}
      >
        <div>
          <MapPinIcon className={`${iconCSS}`} />
          <span>나의 지역</span>
        </div>
      </Link>
      <Link
        href="/"
        className={`${tabCSS} ${active === "2" ? activeCSS : ""}`}
        onClick={handleClickItem("2")}
      >
        <div>
          <MapIcon className={`${iconCSS}`} />
          <span>전체 지역</span>
        </div>
      </Link>
      <Link
        href="/favorites"
        className={`${tabCSS} ${active === "3" ? activeCSS : ""}`}
        onClick={handleClickItem("3")}
      >
        <div>
          <StarIcon className={`${iconCSS}`} />
          <span>즐겨찾기</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomTabs;
