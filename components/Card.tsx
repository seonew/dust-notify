import { useDispatch } from "react-redux";
import clsx from "clsx";
import Favorite from "./Favorite";
import { ItemState, addIsFavoriteToItem } from "@/lib/redux/features/list";
import { addFavorite, deleteFavorite } from "@/lib/redux/features/favorite";
import {
  BACKGROUND_COLOR_BY_PM10GRADE,
  BASIC_TEXT_COLOR_BY_PM10GRADE,
  GRADE_TEXT_BY_PM10GRADE,
  TEXT_COLOR_BY_PM10GRADE,
} from "@/utils/constants";

type Props = {
  item: ItemState;
  isHidden?: boolean;
};

const Card = ({ item, isHidden = false }: Props) => {
  const dispatch = useDispatch();

  const handleClickItem = (checked) => {
    if (checked) {
      const nextItem = { ...item, isFavorite: checked };
      dispatch(addFavorite(nextItem));
    } else {
      dispatch(deleteFavorite(item.stationName));
    }

    dispatch(
      addIsFavoriteToItem({
        stationName: item.stationName,
        isFavorite: checked,
      })
    );
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-between",
        "p-1 m-2 w-80 h-32 text-center rounded-md",
        getBasicColorText(item.pm10Grade),
        getBackgroundColor(item.pm10Grade)
      )}
    >
      <div className="flex items-center justify-between w-full px-1">
        <div className="p-1 text-base">
          <span>{item.stationName}&nbsp;</span>
          <span className="text-xs">{item.sidoName}</span>
        </div>
        {!isHidden && (
          <Favorite checked={item.isFavorite} onChange={handleClickItem} />
        )}
      </div>
      <div>
        <span
          className={clsx(
            "text-3xl rounded p-1 bg-white",
            getColorText(item.pm10Grade)
          )}
        >
          {getGradeText(item.pm10Grade)}
        </span>
      </div>
      <div className="p-1 text-xs">
        <p>미세먼지 수치: {item.pm10Value ?? "-"}</p>
        {item.dataTime && <p>({item.dataTime} 기준)</p>}
      </div>
    </div>
  );
};

export default Card;

const getBackgroundColor = (pm10Grade: string) => {
  return BACKGROUND_COLOR_BY_PM10GRADE[pm10Grade] ?? "bg-white";
};

const getColorText = (pm10Grade: string) => {
  return TEXT_COLOR_BY_PM10GRADE[pm10Grade] ?? "text-black";
};

const getBasicColorText = (pm10Grade: string) => {
  return BASIC_TEXT_COLOR_BY_PM10GRADE[pm10Grade] ?? "text-white";
};

const getGradeText = (pm10Grade: string) => {
  return GRADE_TEXT_BY_PM10GRADE[pm10Grade] ?? "알 수 없음";
};
