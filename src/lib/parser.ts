export type GeneratedFile = {
  path: string;
  content: string;
};

export function parseFiles(text: string): GeneratedFile[] {
  if (!text) return [];

  const files: GeneratedFile[] = [];

  // split on lines that begin with /
  const parts = text.split(/\n(?=\/)/g);

  for (const part of parts) {
    const lines = part.trim().split("\n");
    const path = lines.shift();

    if (!path) continue;

    files.push({
      path: path.trim(),
      content: lines.join("\n").trim(),
    });
  }

  return files;
}
