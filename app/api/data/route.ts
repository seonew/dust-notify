import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const jsonDirectory = path.join(process.cwd(), "public");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  const result = JSON.parse(fileContents).response.body;
  return NextResponse.json(result);
}
