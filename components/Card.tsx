import { ItemState, addIsFavoriteToItem } from "@/lib/redux/features/list";
import { useDispatch } from "react-redux";
import Favorite from "./Favorite";
import { addFavorite, deleteFavorite } from "@/lib/redux/features/favorite";

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
      className={`flex flex-col items-center justify-between p-1 m-2 w-80 h-32 text-center rounded-md ${getBasicColorText(
        item.pm10Grade
      )} ${getBackgroundColor(item.pm10Grade)}`}
    >
      <div className="flex items-center justify-between w-full px-1">
        <div className="p-1 text-base">
          <span>{item.stationName}&nbsp;</span>
          <span className="text-xs">{item.sidoName}</span>
        </div>
        {isHidden ? (
          ""
        ) : (
          <Favorite checked={item.isFavorite} onClick={handleClickItem} />
        )}
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
        <p>미세먼지 수치: {item.pm10Value ?? "-"}</p>
        {item.dataTime ? <p>({item.dataTime} 기준)</p> : ""}
      </div>
    </div>
  );
};

export default Card;

const getBackgroundColor = (pm10Grade: string) => {
  let result = "";
  switch (pm10Grade) {
    case "1":
      result = "bg-blue-400";
      break;
    case "2":
      result = "bg-yellow-400";
      break;
    case "3":
      result = "bg-orange-400";
      break;
    case "4":
      result = "bg-red-500";
      break;
    case "5":
      result = "bg-black";
      break;
    default:
      result = "bg-white";
      break;
  }

  return result;
};

const getColorText = (pm10Grade: string) => {
  let result = "";
  switch (pm10Grade) {
    case "1":
      result = "text-blue-400";
      break;
    case "2":
      result = "text-yellow-400";
      break;
    case "3":
      result = "text-orange-400";
      break;
    case "4":
      result = "text-red-500";
      break;
    case "5":
      result = "text-black";
      break;
    default:
      result = "text-black";
      break;
  }

  return result;
};

const getBasicColorText = (pm10Grade: string) => {
  let result = "";
  switch (pm10Grade) {
    case null:
      result = "text-black";
      break;
    default:
      result = "text-white";
      break;
  }

  return result;
};

const getGradeText = (pm10Grade: string) => {
  let result = "";
  switch (pm10Grade) {
    case "1":
      result = "좋음";
      break;
    case "2":
      result = "보통";
      break;
    case "3":
      result = "한 때 나쁨";
      break;
    case "4":
      result = "나쁨";
      break;
    case "5":
      result = "매우 나쁨";
      break;
    default:
      result = "알 수 없음";
      break;
  }

  return result;
};
