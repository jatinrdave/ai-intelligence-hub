# AI Intelligence Hub

A GitHub-based AI technology research and publishing hub for daily signals, weekly engineering synthesis, monthly landscape analysis, topic research, tools, and practical POCs.

This repository is intentionally static. Codex performs research and authoring when you invoke it, GitHub stores the knowledge base, and GitHub Pages publishes the website.

## Core Workflow

```text
Codex
-> researches current AI developments
-> reads existing repository context
-> writes or updates Markdown
-> updates indexes and navigation
-> commits changes
-> GitHub Pages publishes the static site
```

There are no Anthropic, Tavily, or external LLM API dependencies in this repository.

## Content Areas

- [Daily AI Radar](daily/)
- [Weekly AI Engineering Deep Dive](weekly/)
- [Monthly AI Technology Landscape](monthly/)
- [AI Research](research/)
- [AI Tools](tools/)
- [AI Agents / Agentic AI](agents/)
- [RAG](rag/)
- [Computer Vision / OCR](computer-vision/)
- [MCP](mcp/)
- [AI Coding](ai-coding/)
- [Practical POCs](pocs/)

## Repository Layout

```text
AGENTS.md              Codex operating manual
README.md              Repository overview
index.md               GitHub Pages homepage
_config.yml            GitHub Pages / Jekyll config

daily/                 Daily AI Radar reports
weekly/                Weekly AI Engineering Deep Dives
monthly/               Monthly AI Technology Landscapes

research/              Evergreen AI research notes
tools/                 AI tool evaluations and watchlists
agents/                Agentic AI notes and patterns
rag/                   RAG and knowledge-system notes
computer-vision/       Computer vision, OCR, and document intelligence
mcp/                   Model Context Protocol notes
ai-coding/             AI coding agent notes
pocs/                  Practical proof-of-concepts
templates/             Report templates
docs/                  Setup and maintenance docs

.github/workflows/     GitHub Pages deployment
```

## Using Codex

Open this repository in Codex and ask for one of the operations defined in [AGENTS.md](AGENTS.md), for example:

- "Generate today's AI Radar"
- "Generate this week's AI Deep Dive"
- "Generate this month's AI Landscape"
- "Research the latest AI agents"
- "Create a POC from this week's most interesting development"
- "Update the AI Intelligence Hub homepage"

Codex should search current sources, avoid duplicate topics, write Markdown into the appropriate folder, update indexes, and keep the site publishable.

## GitHub Pages

The only GitHub Action in this repository builds and deploys the static Jekyll site. To enable it:

1. Push the repository to GitHub.
2. Go to **Settings -> Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run **Deploy GitHub Pages** manually.

## Publishing Standards

- Prefer primary sources: official announcements, documentation, research papers, GitHub repositories, Hugging Face, and engineering blogs.
- Include publication dates where relevant.
- Do not invent URLs, benchmarks, release dates, or popularity metrics.
- Clearly label speculation, experimental research, and community discussion.
- Keep examples practical for .NET/C#, Python, Azure, Docker, APIs, SQL Server, Angular, RAG, and MCP.
