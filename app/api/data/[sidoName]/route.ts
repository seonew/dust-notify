import { NextResponse } from "next/server";

const { SERVICE_KEY } = process.env;

export async function GET(request: Request, context: { params }) {
  const { sidoName } = context.params;

  const getParameters = {
    serviceKey:
      "aCuXoZMJoFs8YKFVy35S1WW32EyEJu7FWjfE1PMS2vwI5o8IM%2BInndTI%2FZWdoNBxmClnp7Sh5W6AQf%2BMdTzYtg%3D%3D",
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    sidoName: sidoName,
    ver: "1.0",
  };

  const result = await fetch(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&sidoName=${getParameters["sidoName"]}&ver=${getParameters["ver"]}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.response.body;
    });

  return NextResponse.json(result);
}
