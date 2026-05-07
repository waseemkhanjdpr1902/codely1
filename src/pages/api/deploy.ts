import { deploySite } from "@/lib/deploy/netlify";

export default async function handler(req, res) {
  const deployed = await deploySite(req.body.files);

  res.json(deployed);
}
