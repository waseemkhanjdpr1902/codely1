import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const result = await model.generateContent(`
Create a beautiful React landing page.

Prompt:
${body.prompt}

Return JSX only.
`);

  const code = result.response.text();

  return NextResponse.json({
    success: true,
    code
  });
}
