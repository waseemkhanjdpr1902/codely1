import { createPreview } from "@/lib/sandbox";

export default async function handler(req, res) {
  const url = await createPreview(req.body.files);

  res.json(url);
}
