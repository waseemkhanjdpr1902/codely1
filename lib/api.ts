export async function generate(prompt:string){
  const res = await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});
  return res.json();
}
