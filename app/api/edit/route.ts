// app/api/edit/route.ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  const { fileName, currentCode, instruction } = await req.json();

  if (!fileName || !currentCode || !instruction) {
    return new Response(JSON.stringify({ error: "Missing required fields." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  const send = async (event: string, data: object) => {
    await writer.write(
      encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
    );
  };

  (async () => {
    let newCode = "";
    try {
      const anthropicStream = client.messages.stream({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        system: `You are a code editor. You receive a file and an instruction.
Return ONLY the updated file content — no explanation, no markdown fences, just the raw code.`,
        messages: [{
          role: "user",
          content: `File: ${fileName}\n\nCurrent code:\n${currentCode}\n\nInstruction: ${instruction}`,
        }],
      });

      for await (const chunk of anthropicStream) {
        if (chunk.type === "content_block_delta" && chunk.delta?.type === "text_delta") {
          newCode += chunk.delta.text;
          await send("token", { text: chunk.delta.text });
        }
      }

      await send("done", { code: newCode });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Edit failed.";
      await send("error", { message });
    } finally {
      await writer.close();
    }
  })();

  return new Response(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
