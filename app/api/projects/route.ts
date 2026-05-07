import { NextResponse } from "next/server";
import { admin } from "../../../lib/admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await admin
      .from("projects")
      .insert({
        title: body.title,
        prompt: body.prompt,
        generated_code: body.generated_code
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      project: data
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
