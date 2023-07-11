import { objectToQueryString } from "@/utils/common";
import { NextResponse } from "next/server";

const { SERVICE_KEY } = process.env;

export async function GET(request: Request, context: { params }) {
  const { stationName } = context.params;

  const params = {
    serviceKey: SERVICE_KEY,
    returnType: "json",
    numOfRows: "1",
    pageNo: "1",
    stationName: stationName,
    dataTerm: "DAILY",
    ver: "1.0",
  };

  const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?${objectToQueryString(
    params
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = await data.response.body;

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
