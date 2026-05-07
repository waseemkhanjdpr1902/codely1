import { generateCode } from "@/lib/ai";
import { parseFiles } from "@/lib/parser";

export default async function handler(req, res) {
  const { prompt } = req.body;

  const raw = await generateCode(prompt);
  const files = parseFiles(raw);

  res.status(200).json({
    success: true,
    files
  });
}
