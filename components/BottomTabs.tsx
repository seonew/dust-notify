"use client";

import { MapPinIcon, MapIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomTabs = () => {
  const tabCSS = "w-full h-full flex items-center justify-center";
  const iconCSS = "w-5 h-5 m-auto";
  const activeCSS = "text-green-500 font-semibold";
  const fixedCSS = "fixed w-full left-0";
  const pathname = usePathname();

  return (
    <div
      className={`${fixedCSS} flex items-center justify-between h-16 text-sm bottom-0 z-10 bg-white divide-x shadow-2xl`}
    >
      <Link
        href="/mypage"
        className={`${tabCSS} ${"/mypage" === pathname ? activeCSS : ""}`}
      >
        <div>
          <MapPinIcon className={`${iconCSS}`} />
          <span>나의 지역</span>
        </div>
      </Link>
      <Link
        href="/"
        className={`${tabCSS} ${"/" === pathname ? activeCSS : ""}`}
      >
        <div>
          <MapIcon className={`${iconCSS}`} />
          <span>전체 지역</span>
        </div>
      </Link>
      <Link
        href="/favorites"
        className={`${tabCSS} ${"/favorites" === pathname ? activeCSS : ""}`}
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
