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

export const getColorText = (item: string) => {
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

export const getBasicColorText = (item: string) => {
  let result = "";
  switch (item) {
    case null:
      result = "text-black";
      break;
    default:
      result = "text-white";
      break;
  }

  return result;
};

export const getGradeText = (item: string) => {
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

export const area = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];
