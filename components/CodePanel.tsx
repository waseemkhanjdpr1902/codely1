"use client";
import { useEffect, useState } from "react";

export default function CodePanel() {
  const [code, setCode] = useState("// Generated code appears here");
  useEffect(() => {
    const update = () => {
      const saved = localStorage.getItem("generatedCode");
      if (saved) setCode(saved);
    };
    window.addEventListener("code-updated", update);
    update();
    return () => window.removeEventListener("code-updated", update);
  }, []);

  return <div style={{background:"#0f172a",padding:20,borderRadius:20,minHeight:300}}><h3>Generated Code</h3><pre style={{marginTop:20,whiteSpace:"pre-wrap",color:"#38bdf8"}}>{code}</pre></div>;
}
