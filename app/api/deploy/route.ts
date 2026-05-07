import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    url: "https://demo.codely.app"
  });
}
