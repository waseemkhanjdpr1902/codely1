"use client";

import { useState } from "react";
import { generate, saveProject } from "../lib/api";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const data = await generate(prompt);

      if (data.code) {
        localStorage.setItem(
          "generatedCode",
          data.code
        );

        window.dispatchEvent(
          new Event("code-updated")
        );

        await saveProject({
          title: prompt.slice(0, 40),
          prompt,
          generated_code: data.code
        });
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 12
      }}
    >
      <input
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        placeholder="Build ecommerce website..."
        style={{
          flex: 1,
          padding: 20,
          borderRadius: 14,
          border: "1px solid #334155",
          background: "#0f172a",
          color: "white"
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          padding: "20px 30px",
          border: "none",
          borderRadius: 14,
          background:
            "linear-gradient(90deg,#38bdf8,#8b5cf6)",
          color: "white",
          fontWeight: 700
        }}
      >
        {loading
          ? "Generating..."
          : "Generate App"}
      </button>
    </div>
  );
}
