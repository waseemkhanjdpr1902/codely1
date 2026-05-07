import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const code = `export default function App(){return <h1>${body.prompt}</h1>}`;
  return NextResponse.json({ success: true, code });
}
