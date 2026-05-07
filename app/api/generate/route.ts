import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY" },
        { status: 500 }
      );
    }

    const { prompt } = await req.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(`
Build a beautiful React landing page.

Prompt:
${prompt}

Return only JSX code.
`);

    const code = result.response.text();

    return NextResponse.json({
      success: true,
      code
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message
      },
      {
        status: 500
      }
    );
  }
}
