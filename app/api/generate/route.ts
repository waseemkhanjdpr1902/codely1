export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt) {
      return Response.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      output: `Generated response for: ${prompt}`,
    });
  } catch (error: any) {
    console.error("Generate API error:", error);

    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    message: "Generate API is live",
  });
}
