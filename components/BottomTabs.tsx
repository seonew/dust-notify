import { StarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, MapIcon } from "@heroicons/react/24/outline";

const BottomTabs = () => {
  const handleClickItem = () => {
    console.log("BottomTabs handleClickItem");
  };

  return (
    <div className="flex items-center justify-between h-16 text-sm sticky bottom-0 z-50 bg-white ">
      <div className="" onClick={handleClickItem}>
        <MapPinIcon className="w-5 h-5" />
        <span>기본 지역</span>
      </div>
      <div onClick={handleClickItem}>
        <MapIcon className="w-5 h-5" />
        <span>전체 보기</span>
      </div>
      <div className="" onClick={handleClickItem}>
        <StarIcon className="w-5 h-5" />
        <span>즐겨찾기</span>
      </div>
    </div>
  );
};

export default BottomTabs;
