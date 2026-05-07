import PromptBox from "./PromptBox";
import CodePanel from "./CodePanel";
import PreviewPanel from "./PreviewPanel";

export default function Hero() {
  return (
    <section className="container" style={{padding:"60px 0"}}>
      <h1 style={{textAlign:"center",fontSize:60,marginBottom:20}}>Describe your app.</h1>
      <h2 style={{textAlign:"center",fontSize:44,color:"#38bdf8",marginBottom:20}}>Codely builds it.</h2>
      <p style={{textAlign:"center",color:"#94a3b8",marginBottom:40}}>Generate SaaS products with AI</p>
      <PromptBox />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:30,marginTop:50}}>
        <CodePanel />
        <PreviewPanel />
      </div>
    </section>
  );
}
