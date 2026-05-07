import { fixCode } from "@/lib/ai";

export default async function handler(req, res) {
  const { code, error } = req.body;

  const fixed = await fixCode(code, error);

  res.json({
    fixed
  });
}
