// app/api/generate/route.ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a senior full-stack SaaS engineer. When given a SaaS idea you output ONLY a raw JSON object — no markdown fences, no explanation, no preamble.

Return this exact shape:
{
  "name": "ShortAppName",
  "tagline": "One-sentence value proposition",
  "stack": {
    "frontend": "Next.js 14 + Tailwind CSS",
    "backend": "Next.js API Routes",
    "database": "PostgreSQL + Prisma ORM",
    "auth": "NextAuth.js + JWT",
    "deploy": "Vercel"
  },
  "files": [
    { "name": "page.tsx",       "folder": "app",              "language": "tsx",     "content": "// full working Next.js page component" },
    { "name": "route.ts",       "folder": "app/api/resource", "language": "ts",      "content": "// Next.js API route handler" },
    { "name": "schema.prisma",  "folder": "prisma",           "language": "prisma",  "content": "// Prisma schema with all models" },
    { "name": "auth.ts",        "folder": "lib",              "language": "ts",      "content": "// NextAuth config" },
    { "name": "package.json",   "folder": "root",             "language": "json",    "content": "// package.json" },
    { "name": ".env.example",   "folder": "root",             "language": "env",     "content": "// all env vars" },
    { "name": "README.md",      "folder": "root",             "language": "markdown","content": "// setup instructions" }
  ],
  "routes": [
    { "method": "GET",    "path": "/api/resource",     "desc": "List all resources" },
    { "method": "POST",   "path": "/api/resource",     "desc": "Create resource" },
    { "method": "PUT",    "path": "/api/resource/[id]","desc": "Update resource" },
    { "method": "DELETE", "path": "/api/resource/[id]","desc": "Delete resource" }
  ],
  "dependencies": [
    { "name": "next",           "version": "^14.2.0", "type": "fe" },
    { "name": "react",          "version": "^18.3.0", "type": "fe" },
    { "name": "tailwindcss",    "version": "^3.4.0",  "type": "fe" },
    { "name": "@prisma/client", "version": "^5.15.0", "type": "be" },
    { "name": "next-auth",      "version": "^4.24.0", "type": "be" },
    { "name": "zod",            "version": "^3.23.0", "type": "be" }
  ],
  "dbTables": ["users", "sessions", "accounts"],
  "terminalLog": [
    "$ npm install",
    "$ npx prisma generate",
    "$ npx prisma migrate dev --name init",
    "$ npm run dev",
    "✓ Prisma Client generated",
    "✓ Database migrated successfully",
    "✓ Next.js ready on http://localhost:3000",
    "✓ Build complete"
  ]
}

Write REAL, working code in every file. Use proper TypeScript types.`;

export async function POST(req: Request) {
  const { idea } = await req.json();

  if (!idea || idea.trim().length < 5) {
    return new Response(JSON.stringify({ error: "Please describe your SaaS idea." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Create a TransformStream to pipe Anthropic SSE → client SSE
  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  const send = async (event: string, data: object) => {
    await writer.write(
      encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
    );
  };

  // Run generation in background (don't await here)
  (async () => {
    const STEPS = [
      "Parsing your SaaS idea…",
      "Designing database schema…",
      "Generating Next.js frontend…",
      "Building API routes…",
      "Wiring auth & middleware…",
      "Writing config & env…",
      "Polishing & finalising…",
    ];

    let fullText = "";
    let charCount = 0;
    let stepIndex = 0;

    try {
      await send("status", { message: STEPS[0] });

      const anthropicStream = client.messages.stream({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8192,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: `Build a production-ready SaaS: ${idea}` }],
      });

      for await (const chunk of anthropicStream) {
        if (chunk.type === "content_block_delta" && chunk.delta?.type === "text_delta") {
          const text = chunk.delta.text;
          fullText += text;
          charCount += text.length;

          // Advance step label every ~400 chars
          const newStep = Math.min(Math.floor(charCount / 400), STEPS.length - 1);
          if (newStep !== stepIndex) {
            stepIndex = newStep;
            await send("status", { message: STEPS[stepIndex] });
          }

          await send("token", { text });
        }
      }

      // Parse final JSON
      const clean = fullText
        .replace(/^```(?:json)?\n?/m, "")
        .replace(/\n?```$/m, "")
        .trim();

      const project = JSON.parse(clean);
      await send("done", { project });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Generation failed.";
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
