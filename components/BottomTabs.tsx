import { StarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, MapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BottomTabs = () => {
  return (
    <div className="flex items-center justify-between h-16 text-sm sticky bottom-0 z-50 bg-white ">
      <div>
        <MapPinIcon className="w-5 h-5" />
        <span>기본 지역</span>
      </div>
      <div>
        <Link href="/">
          <MapIcon className="w-5 h-5" />
          <span>전체 보기</span>
        </Link>
      </div>
      <div className="">
        <Link href="/favorites">
          <StarIcon className="w-5 h-5" />
          <span>즐겨찾기</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomTabs;
