"use client";

import { MapPinIcon, MapIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomTabs = () => {
  const fixedCSS = "fixed w-full left-0";
  const pathname = usePathname();

  return (
    <div
      className={`${fixedCSS} flex items-center justify-between h-16 text-sm bottom-0 z-10 bg-white divide-x shadow-2xl`}
    >
      <Link
        href="/mypage"
        className={`bottom-tab ${
          "/mypage" === pathname ? "bottom-tab-active" : ""
        }`}
      >
        <div>
          <MapPinIcon className="bottom-tab-icon" />
          <span>나의 지역</span>
        </div>
      </Link>
      <Link
        href="/"
        className={`bottom-tab ${"/" === pathname ? "bottom-tab-active" : ""}`}
      >
        <div>
          <MapIcon className="bottom-tab-icon" />
          <span>전체 지역</span>
        </div>
      </Link>
      <Link
        href="/favorites"
        className={`bottom-tab ${
          "/favorites" === pathname ? "bottom-tab-active" : ""
        }`}
      >
        <div>
          <StarIcon className="bottom-tab-icon" />
          <span>즐겨찾기</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomTabs;
