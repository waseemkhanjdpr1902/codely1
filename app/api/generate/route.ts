import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const prompt = body.prompt;

  // temporary response
  return NextResponse.json({
    success: true,
    files: [
      {
        path: "app/page.tsx",
        content: `<div>${prompt}</div>`
      }
    ]
  });
}
