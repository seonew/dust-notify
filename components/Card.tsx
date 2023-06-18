import { ItemState, updateFavorite } from "@/app/GlobalRedux/Features/list";
import {
  getBackgroundColor,
  getBasicColorText,
  getColorText,
  getGradeText,
} from "@/utils/common";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import Favorite from "./Favorite";
import { FavoriteState, update } from "@/app/GlobalRedux/Features/favorite";

type Props = {
  item: ItemState;
};

const Card = ({ item }: Props) => {
  const list = useSelector((state: RootState) => state.list.items);
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const dispatch = useDispatch();

  const handleClickItem = (checked) => {
    console.log(`Card handleClickItem: ${checked} `);
  };

  return (
    <div
      className={`flex flex-col items-center justify-between p-1 m-2 w-80 h-32 text-center rounded-md ${getBasicColorText(
        item.pm10Grade
      )} ${getBackgroundColor(item.pm10Grade)}`}
    >
      <div className="flex items-center justify-between w-full px-1">
        <div className="p-1 text-base">
          <span>{item.stationName}&nbsp;</span>
          <span className="text-xs">{item.sidoName}</span>
        </div>
        <Favorite checked={item.isFavorite} onClick={handleClickItem} />
      </div>
      <div>
        <span
          className={`text-3xl rounded p-1 bg-white ${getColorText(
            item.pm10Grade
          )}`}
        >
          {getGradeText(item.pm10Grade)}
        </span>
      </div>
      <div className="p-1 text-xs">
        {item.pm10Value ? (
          <p>미세먼지 수치: {item.pm10Value}</p>
        ) : (
          <p>데이터를 일시적으로 불러올 수 없음</p>
        )}
        {item.dataTime ? <p>({item.dataTime} 기준)</p> : ""}
      </div>
    </div>
  );
};

export default Card;
