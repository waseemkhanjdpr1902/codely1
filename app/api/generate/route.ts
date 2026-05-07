import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  return NextResponse.json({
    success: true,
    files: [
      {
        path: "app/page.tsx",
        content: `<div class="p-10">${prompt}</div>`
      }
    ]
  });
}
