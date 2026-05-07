export async function generateCode(prompt: string) {
  const res = await fetch(process.env.AI_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AI_KEY}`
    },
    body: JSON.stringify({
      prompt,
      mode: "fullstack-app"
    })
  });

  const data = await res.json();
  return data.output;
}
