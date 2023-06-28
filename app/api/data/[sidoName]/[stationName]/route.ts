import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params }) {
  const { stationName } = context.params;

  const getParameters = {
    serviceKey:
      "aCuXoZMJoFs8YKFVy35S1WW32EyEJu7FWjfE1PMS2vwI5o8IM%2BInndTI%2FZWdoNBxmClnp7Sh5W6AQf%2BMdTzYtg%3D%3D",
    returnType: "json",
    numOfRows: "1",
    pageNo: "1",
    stationName: stationName,
    dataTerm: "DAILY",
    ver: "1.0",
  };

  try {
    const result = await fetch(
      `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&stationName=${getParameters["stationName"]}&dataTerm=${getParameters["dataTerm"]}&ver=${getParameters["ver"]}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data.response.body;
      })
      .catch((error) => {
        console.log(error);
      });

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json(null);
}
