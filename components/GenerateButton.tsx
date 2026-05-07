"use client";

async function generate() {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: "build landing page"
    })
  });

  const data = await res.json();

  console.log(data);
}
"use client";

import { useState } from "react";

export default function DeployButton() {
  const [loading, setLoading] = useState(false);

  async function handleDeploy() {
    try {
      setLoading(true);

      const res = await fetch("/api/deploy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log("Deploy response:", data);

      if (data.url) {
        window.open(data.url, "_blank");
      } else {
        alert("Deploy route connected, but no URL returned");
      }
    } catch (err) {
      console.error(err);
      alert("Deploy failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDeploy}
      disabled={loading}
      className="px-6 py-3 rounded-lg bg-green-600 text-white"
    >
      {loading ? "Deploying..." : "Deploy"}
    </button>
  );
}
