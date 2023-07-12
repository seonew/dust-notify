"use client";

import { MapPinIcon, MapIcon, StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomTabs = () => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed w-full left-0",
        "flex items-center justify-between h-16",
        "text-sm bottom-0 z-10 bg-white divide-x shadow-2xl"
      )}
    >
      <Link
        href="/mypage"
        className={clsx("bottom-tab", {
          "bottom-tab-active": "/mypage" === pathname,
        })}
      >
        <div>
          <MapPinIcon className="bottom-tab-icon" />
          <span>나의 지역</span>
        </div>
      </Link>
      <Link
        href="/"
        className={clsx("bottom-tab", {
          "bottom-tab-active": "/" === pathname,
        })}
      >
        <div>
          <MapIcon className="bottom-tab-icon" />
          <span>전체 지역</span>
        </div>
      </Link>
      <Link
        href="/favorites"
        className={clsx("bottom-tab", {
          "bottom-tab-active": "/favorites" === pathname,
        })}
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
