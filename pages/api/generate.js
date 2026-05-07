export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    return res.status(200).json({
      success: true,
      output: `Generated response for: ${prompt}`,
    });
  } catch (error) {
    console.error("API error:", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
