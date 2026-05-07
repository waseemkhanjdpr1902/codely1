import "server-only";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(
      `Create modern React UI for: ${prompt}`
    );

    const code = result.response.text();

    return NextResponse.json({
      success: true,
      code
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
