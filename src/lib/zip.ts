import JSZip from "jszip";

export async function exportZip(files) {
  const zip = new JSZip();

  files.forEach((f) => {
    zip.file(f.path, f.content);
  });

  return await zip.generateAsync({
    type: "blob"
  });
}
