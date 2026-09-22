import fs from "node:fs/promises";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT, DAILY_PROMPT, WEEKLY_PROMPT, MONTHLY_PROMPT } from "./prompts.mjs";

const mode = process.argv[2];
if (!["daily", "weekly", "monthly"].includes(mode)) {
  throw new Error("Usage: node scripts/generate.mjs daily|weekly|monthly");
}

const anthropicKey = process.env.ANTHROPIC_API_KEY;
const tavilyKey = process.env.TAVILY_API_KEY;

if (!anthropicKey) throw new Error("ANTHROPIC_API_KEY is required.");
if (!tavilyKey) throw new Error("TAVILY_API_KEY is required.");

const client = new Anthropic({ apiKey: anthropicKey });

async function searchTavily(query) {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: tavilyKey,
      query,
      search_depth: "advanced",
      max_results: 8,
      include_answer: false,
      include_raw_content: false
    })
  });

  if (!response.ok) throw new Error(`Tavily search failed: ${response.status}`);
  return response.json();
}

async function loadRecentReports() {
  const dirs = ["daily", "weekly", "monthly"];
  const chunks = [];

  for (const dir of dirs) {
    try {
      const names = (await fs.readdir(dir))
        .filter(x => x.endsWith(".md"))
        .sort()
        .slice(-8);

      for (const name of names) {
        chunks.push(`### ${dir}/${name}\n${await fs.readFile(path.join(dir, name), "utf8")}`);
      }
    } catch {}
  }

  return chunks.join("\n\n").slice(-60000);
}

const queries = [
  "latest AI agents agentic AI research tools developer September 2026",
  "latest generative AI LLM reasoning multimodal model research September 2026",
  "latest RAG GraphRAG agentic RAG MCP research tools September 2026",
  "latest computer vision OCR document AI multimodal open source GitHub September 2026",
  "latest AI coding agents software engineering developer tools September 2026",
  "latest AI research papers agents reasoning multimodal September 2026",
  "trending AI engineering GitHub repositories Hugging Face September 2026"
];

const results = [];
for (const query of queries) {
  const data = await searchTavily(query);
  results.push(...(data.results || []).map(r => ({
    title: r.title,
    url: r.url,
    content: r.content
  })));
}

const deduped = [...new Map(results.map(x => [x.url, x])).values()].slice(0, 50);

const sourcePack = deduped.map((r, i) =>
  `[${i + 1}] ${r.title}\nURL: ${r.url}\n${r.content}`
).join("\n\n");

const historical = await loadRecentReports();

const prompt =
  mode === "daily" ? DAILY_PROMPT :
  mode === "weekly" ? WEEKLY_PROMPT :
  MONTHLY_PROMPT;

const contextInstruction = `
Current research results:
${sourcePack}

Recent reports from this repository:
${historical}

Use the source material above. Do not invent source URLs.
Return ONLY the article in Markdown. Start with an appropriate H1 title.
`;

const message = await client.messages.create({
  model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
  max_tokens: 12000,
  system: SYSTEM_PROMPT,
  messages: [{
    role: "user",
    content: `${prompt}\n\n${contextInstruction}`
  }]
});

const article = message.content
  .filter(x => x.type === "text")
  .map(x => x.text)
  .join("\n");

const now = new Date();
const isoDate = now.toISOString().slice(0, 10);

function isoWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

let dir;
let filename;

if (mode === "daily") {
  dir = "daily";
  filename = `${isoDate}.md`;
} else if (mode === "weekly") {
  dir = "weekly";
  filename = `${now.getUTCFullYear()}-W${String(isoWeek(now)).padStart(2, "0")}.md`;
} else {
  dir = "monthly";
  filename = `${isoDate.slice(0, 7)}.md`;
}

await fs.mkdir(dir, { recursive: true });
await fs.writeFile(path.join(dir, filename), article.trim() + "\n");

async function updateIndex(dirName, marker, title) {
  const file = path.join(dirName, "index.md");
  let content = await fs.readFile(file, "utf8");
  const names = (await fs.readdir(dirName))
    .filter(x => x.endsWith(".md") && x !== "index.md")
    .sort()
    .reverse()
    .slice(0, 30);

  const links = names.map(x => `- [${x.replace(".md", "")}](${x})`).join("\n");
  const replacement = `${marker}\n\n${links || "_No reports yet._"}`;

  const start = content.indexOf(marker);
  if (start >= 0) {
    content = content.slice(0, start) + replacement + content.slice(start + marker.length);
  }
  await fs.writeFile(file, content);
}

if (mode === "daily") await updateIndex("daily", "<!-- DAILY_INDEX -->", "Daily");
if (mode === "weekly") await updateIndex("weekly", "<!-- WEEKLY_INDEX -->", "Weekly");
if (mode === "monthly") await updateIndex("monthly", "<!-- MONTHLY_INDEX -->", "Monthly");

console.log(`Generated ${mode}: ${dir}/${filename}`);
