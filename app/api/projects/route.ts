import { NextResponse } from "next/server";
import { createAdminClient } from "../../../lib/server/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("projects")
      .insert({
        title: body.title || "Untitled",
        prompt: body.prompt || "",
        generated_code: body.generated_code || ""
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
      { error: error.message },
      { status: 500 }
    );
  }
}
