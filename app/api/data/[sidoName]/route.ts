import { objectToQueryString } from "@/utils/common";
import { NextResponse } from "next/server";

const { SERVICE_KEY } = process.env;

export async function GET(request: Request, context: { params }) {
  const { sidoName } = context.params;

  const params = {
    serviceKey: SERVICE_KEY,
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    sidoName: sidoName,
    ver: "1.0",
  };

  const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?${objectToQueryString(
    params
  )}`;

  try {
    const result = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data.response.body;
      })
      .catch((error) => {
        console.log(error);
      });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(null);
}
