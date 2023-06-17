export const getBackgroundColor = (item: string) => {
  let result = "";
  switch (item) {
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

export const getTextColor = (item: string) => {
  let result = "";
  switch (item) {
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

export const getTextGrade = (item: string) => {
  let result = "";
  switch (item) {
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
