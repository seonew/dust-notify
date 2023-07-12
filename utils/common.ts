import {
  BACKGROUND_COLOR_BY_PM10GRADE,
  BASIC_TEXT_COLOR_BY_PM10GRADE,
  GRADE_TEXT_BY_PM10GRADE,
  TEXT_COLOR_BY_PM10GRADE,
} from "@/utils/constants";

export const objectToQueryString = (params) => {
  const queryStrings = Object.keys(params).map((key) => {
    const value = params[key];

    if (key === "serviceKey") {
      return `${encodeURIComponent(key)}=${value}`;
    }
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });

  return queryStrings.join("&");
};

export const getBackgroundColor = (pm10Grade: string) => {
  return BACKGROUND_COLOR_BY_PM10GRADE[pm10Grade] ?? "bg-white";
};

export const getColorText = (pm10Grade: string) => {
  return TEXT_COLOR_BY_PM10GRADE[pm10Grade] ?? "text-black";
};

export const getBasicColorText = (pm10Grade: string) => {
  return BASIC_TEXT_COLOR_BY_PM10GRADE[pm10Grade] ?? "text-white";
};

export const getGradeText = (pm10Grade: string) => {
  return GRADE_TEXT_BY_PM10GRADE[pm10Grade] ?? "알 수 없음";
};
