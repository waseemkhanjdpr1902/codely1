export default function Navbar() {
  return (
    <nav style={{padding:"20px 0",borderBottom:"1px solid #1e293b"}}>
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h2 style={{color:"#38bdf8"}}>Codely AI</h2>
        <button style={{padding:"10px 20px",borderRadius:10,border:"none"}}>Login</button>
      </div>
    </nav>
  );
}
