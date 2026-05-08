// lib/codely-api.ts
// Drop this in your existing lib/ folder.
// Usage:  import { generateProject, editFile, chatWithAI } from "@/lib/codely-api"

export interface ProjectFile {
  name: string;
  folder: string;
  language: string;
  content: string;
}

export interface ApiRoute {
  method: string;
  path: string;
  desc: string;
}

export interface Dependency {
  name: string;
  version: string;
  type: "fe" | "be";
}

export interface Project {
  name: string;
  tagline: string;
  stack: Record<string, string>;
  files: ProjectFile[];
  routes: ApiRoute[];
  dependencies: Dependency[];
  dbTables: string[];
  terminalLog: string[];
}

export interface StreamHandlers {
  onStatus?: (data: { message: string }) => void;
  onToken?: (data: { text: string }) => void;
  onDone?: (data: { project?: Project; code?: string }) => void;
  onError?: (data: { message: string }) => void;
}

// ── Internal SSE reader ───────────────────────────────────────────────────────
function readStream(url: string, body: object, handlers: StreamHandlers) {
  let cancelled = false;

  (async () => {
    let resp: Response;
    try {
      resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      handlers.onError?.({ message: `Network error: ${(err as Error).message}` });
      return;
    }

    if (!resp.ok) {
      const json = await resp.json().catch(() => ({})) as { error?: string };
      handlers.onError?.({ message: json.error ?? `HTTP ${resp.status}` });
      return;
    }

    const reader = resp.body!.getReader();
    const decoder = new TextDecoder();
    let buf = "";

    while (!cancelled) {
      const { done, value } = await reader.read();
      if (done) break;

      buf += decoder.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";

      let eventName = "";
      for (const line of lines) {
        if (line.startsWith("event: ")) {
          eventName = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          let data: Record<string, unknown>;
          try { data = JSON.parse(line.slice(6)); } catch { continue; }

          if (eventName === "status") handlers.onStatus?.(data as { message: string });
          else if (eventName === "token") handlers.onToken?.(data as { text: string });
          else if (eventName === "done") handlers.onDone?.(data as { project?: Project; code?: string });
          else if (eventName === "error") handlers.onError?.(data as { message: string });

          eventName = "";
        }
      }
    }
  })();

  return { cancel: () => { cancelled = true; } };
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Generate a full SaaS project from a plain-English idea.
 *
 * @example
 * generateProject("A Kanban board with team collaboration", {
 *   onStatus: ({ message }) => setStep(message),
 *   onToken:  ({ text }) => setRaw(r => r + text),
 *   onDone:   ({ project }) => setProject(project),
 *   onError:  ({ message }) => console.error(message),
 * });
 */
export function generateProject(idea: string, handlers: StreamHandlers) {
  return readStream("/api/generate", { idea }, handlers);
}

/**
 * Ask the AI to edit a specific file.
 *
 * @example
 * editFile(
 *   { fileName: "route.ts", currentCode: "...", instruction: "Add rate limiting" },
 *   { onToken: ({ text }) => setCode(c => c + text), onDone: ({ code }) => setCode(code!) }
 * );
 */
export function editFile(
  params: { fileName: string; currentCode: string; instruction: string },
  handlers: StreamHandlers
) {
  return readStream("/api/edit", params, handlers);
}

/**
 * Chat with the AI about the current project.
 *
 * @example
 * const reply = await chatWithAI(
 *   [{ role: "user", content: "How do I add Stripe payments?" }],
 *   project
 * );
 */
export async function chatWithAI(
  messages: Array<{ role: "user" | "assistant"; content: string }>,
  projectContext?: Project | null
): Promise<string> {
  const resp = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, projectContext }),
  });

  if (!resp.ok) {
    const json = await resp.json().catch(() => ({})) as { error?: string };
    throw new Error(json.error ?? `HTTP ${resp.status}`);
  }

  const data = await resp.json() as { reply: string };
  return data.reply;
}
