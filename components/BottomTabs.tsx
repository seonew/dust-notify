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
    <div className="flex items-center justify-between h-16 text-sm sticky bottom-0 z-50 bg-white divide-x shadow-lg">
      <div className={`${tabCSS}`} onClick={handleClickItem("1")}>
        <Link href="/" className={`${active === "1" ? activeCSS : ""}`}>
          <MapPinIcon className={`${iconCSS}`} />
          <span>기본 지역</span>
        </Link>
      </div>
      <div className={`${tabCSS}`} onClick={handleClickItem("2")}>
        <Link href="/" className={`${active === "2" ? activeCSS : ""}`}>
          <MapIcon className={`${iconCSS}`} />
          <span>전체 지역</span>
        </Link>
      </div>
      <div className={`${tabCSS}`} onClick={handleClickItem("3")}>
        <Link
          href="/favorites"
          className={`${active === "3" ? activeCSS : ""}`}
        >
          <StarIcon className={`${iconCSS}`} />
          <span>즐겨찾기</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomTabs;
