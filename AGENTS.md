# AI Intelligence Hub Operating Manual

This repository is a GitHub-based AI technology research and publishing platform. Codex is the research and authoring agent. GitHub is the source of truth. GitHub Pages is the presentation layer.

Do not add Anthropic, Tavily, or external LLM API-based generation pipelines. Research and content generation happen when the user invokes Codex.

## Core Workflow

When generating or updating content:

1. Read the relevant repository context first.
2. Search the web for current information.
3. Prefer recent, primary, technically authoritative sources.
4. Compare against recent reports to avoid duplicated topics.
5. Write clean GitHub-flavored Markdown into the appropriate folder.
6. Update the relevant `index.md` page with newest links first.
7. Update the homepage when latest or featured content changes.
8. Verify links, dates, headings, and source quality before completion.
9. Keep the repository static and GitHub Pages compatible.

## Research Principles

- Prefer primary sources: official announcements, official documentation, research papers, GitHub repositories, Hugging Face model/project pages, and official engineering blogs.
- Use reputable secondary sources when they add useful synthesis or context.
- Prefer recent information, but include older foundational sources when they are still important.
- Never invent URLs, release dates, benchmark numbers, GitHub stars, adoption claims, or product capabilities.
- Include publication dates where relevant.
- Clearly distinguish facts, research findings, company announcements, community discussion, opinion, and speculation.
- Do not treat social-media popularity as proof of technical importance.
- Avoid duplicate topics already covered in recent reports unless there is a meaningful new development.
- Label experimental, research-stage, speculative, or immature technologies explicitly.
- Do not claim a tool is production-ready without evidence.
- Keep reports readable and technical; do not create unnecessarily huge posts.

## Technical Focus

Prioritize developments in:

- AI agents and agentic AI
- Generative AI
- LLMs, SLMs, reasoning models, and multimodal AI
- Computer-use agents
- AGI research
- RAG, Graph RAG, Agentic RAG, multimodal RAG
- AI memory and context engineering
- MCP
- AI coding agents and software engineering agents
- Computer vision, OCR, and document intelligence
- Architectural drawing understanding
- Multimodal extraction
- AI evaluation, observability, and guardrails
- AI security
- Local LLMs and inference optimization
- Vector databases and knowledge graphs

## Engineering Perspective

For important developments, explain:

- What changed
- Why it matters
- What is technically new
- How it works
- Real-world use cases
- Maturity level
- Limitations
- Production considerations
- How developers can experiment with it

Prefer practical enterprise examples using .NET/C#, Python, Azure, Docker, APIs, SQL Server, Angular, RAG, and MCP. Use .NET/C# where appropriate for enterprise implementation examples, and Python where the ecosystem fit is stronger.

## Content Types

### Daily AI Radar

Triggered by:

- "Generate today's AI Radar"
- "Create today's AI Radar"
- "Daily AI Radar"
- equivalent wording

Workflow:

1. Determine today's date in `YYYY-MM-DD` format.
2. Read `daily/index.md` and recent `daily/*.md` reports.
3. Search current AI developments.
4. Prioritize primary sources and recent publication dates.
5. Avoid duplicating recent report topics unless a meaningful update occurred.
6. Create `daily/YYYY-MM-DD.md`.
7. Update `daily/index.md` with the new report link at the top.
8. Update `index.md` if latest links or featured notes should change.

Required structure:

```markdown
# AI Radar — YYYY-MM-DD

## 🔥 Executive Summary

## 🤖 AI Models & Generative AI

## 🧠 Agents & Agentic AI

## 🔍 RAG & Knowledge Systems

## 👁️ Computer Vision / OCR / Multimodal

## 💻 AI Coding & Software Engineering

## 🔌 MCP & Tool Ecosystem

## 📚 Research Papers

## 🛠️ Tools & GitHub Projects

## 🌎 Developer Community Trends

## 🔥 5 Things Worth Knowing

## 🧪 Practical POC

## 💡 Trending Real-World Problem

## Sources
```

For the real-world problem include the problem, why it is difficult, proposed solution, architecture, .NET or Python example, and production considerations. Use Mermaid diagrams when useful.

### Weekly AI Engineering Deep Dive

Triggered by:

- "Generate this week's AI Deep Dive"
- "Create this week's AI Engineering Weekly"
- "Weekly AI Deep Dive"
- equivalent wording

Workflow:

1. Determine the ISO week in `YYYY-WXX` format.
2. Read recent Daily AI Radar reports and the latest weekly reports.
3. Identify recurring and important themes.
4. Perform additional current research.
5. Avoid concatenating daily reports; synthesize deeper engineering insight.
6. Create `weekly/YYYY-WXX.md`.
7. Update `weekly/index.md` with the new report link at the top.
8. Update the homepage when useful.

Required structure:

```markdown
# AI Engineering Weekly — YYYY-WXX

## Executive Summary

## Biggest Developments

## Deep Technical Trends

## AI Agents

## RAG

## Computer Vision

## AI Coding

## MCP

## Research

## Tools

## Emerging Concepts

## Deep-Dive Engineering Problem

## Practical POC for This Week

## What Developers Should Learn

## Sources
```

The deep-dive engineering problem should include architecture, Mermaid diagram, implementation, .NET/Python example, performance, scalability, security, cost, observability, reliability, and evaluation.

### Monthly AI Technology Landscape

Triggered by:

- "Generate this month's AI Landscape"
- "Create this month's AI Technology Landscape"
- "Monthly AI Landscape"
- equivalent wording

Workflow:

1. Determine the month in `YYYY-MM` format.
2. Read the month's daily and weekly reports.
3. Identify major changes and emerging trends.
4. Perform additional current research.
5. Create `monthly/YYYY-MM.md`.
6. Update `monthly/index.md` with the new report link at the top.
7. Update the homepage when useful.

Required structure:

```markdown
# AI Technology Landscape — YYYY-MM

## Executive Summary

## Biggest Technology Shifts

## Model Landscape

## Agentic AI Landscape

## RAG & Knowledge Systems

## Computer Vision / OCR

## AI Coding

## MCP

## Research

## Open Source Ecosystem

## Tools Worth Evaluating

## Emerging Technologies

## Enterprise Implications

## Technologies to Experiment With

## 3 Recommended POCs

## What Changed From Last Month

## Sources
```

Clearly distinguish established, production-ready, experimental, research-stage, and speculative items.

## Topic Research Operations

Use these operations to create or update evergreen notes:

- "Research the latest AI agents" -> update `agents/`
- "Research latest RAG developments" -> update `rag/`
- "Research latest computer vision and OCR tools" -> update `computer-vision/`
- "Research latest AI coding agents" -> update `ai-coding/`
- "Research latest MCP developments" -> update `mcp/`

For topic research:

1. Search current sources.
2. Prefer primary technical sources.
3. Add or update a dated Markdown note in the relevant folder.
4. Update that folder's `index.md`.
5. Include source links and dates.
6. Include practical enterprise implications and experiment ideas.

## POC Operation

Triggered by:

- "Create a POC from this week's most interesting development"
- equivalent wording

Workflow:

1. Read recent daily and weekly reports.
2. Select one high-value, practical development.
3. Create a new POC note in `pocs/`.
4. Include problem statement, architecture, implementation sketch, dependencies, risks, evaluation plan, and production path.
5. Prefer .NET/C# for enterprise service examples and Python for model/retrieval/data pipelines.

## Homepage Operation

Triggered by:

- "Update the AI Intelligence Hub homepage"
- equivalent wording

Workflow:

1. Read current daily, weekly, monthly, topic, and POC indexes.
2. Update `index.md` to surface the latest and most useful content.
3. Keep the homepage clean, technical, and easy to scan.
4. Do not add marketing fluff.

## Markdown and Site Standards

- Use GitHub-flavored Markdown.
- Use concise headings and tables where they improve scanning.
- Use Mermaid diagrams for architecture and workflows when useful.
- Use fenced code blocks with language identifiers.
- Include source links in a dedicated `Sources` section for reports.
- Use relative links for internal repository pages.
- Keep file names predictable:
  - Daily: `daily/YYYY-MM-DD.md`
  - Weekly: `weekly/YYYY-WXX.md`
  - Monthly: `monthly/YYYY-MM.md`
  - Topic notes: `topic/YYYY-MM-DD-short-title.md`
  - POCs: `pocs/YYYY-MM-DD-short-title.md`

## Quality Checklist

Before finishing any generated report or research note:

- Duplicate topics checked against recent reports.
- Links verified.
- Dates checked.
- Primary sources preferred.
- Speculation clearly labeled.
- Benchmarks and popularity claims supported.
- Production-readiness claims supported.
- Practical implementation guidance included.
- Security, cost, reliability, evaluation, and observability considered for important topics.
- Relevant index page updated.
- Homepage updated when appropriate.
