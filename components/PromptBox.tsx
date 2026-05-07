"use client";
import { useState } from "react";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt) return;
    setLoading(true);
    const res = await fetch("/api/generate", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({ prompt })
    });
    const data = await res.json();
    localStorage.setItem("generatedCode", data.code);
    window.dispatchEvent(new Event("code-updated"));
    setLoading(false);
  }

  return (
    <div style={{display:"flex",gap:10}}>
      <input value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Build ecommerce website..." style={{flex:1,padding:20,borderRadius:14,border:"1px solid #334155",background:"#0f172a",color:"white"}} />
      <button onClick={handleGenerate} style={{padding:"20px 30px",border:"none",borderRadius:14,background:"#38bdf8",color:"white"}}>
        {loading ? "Generating..." : "Generate App"}
      </button>
    </div>
  );
}
