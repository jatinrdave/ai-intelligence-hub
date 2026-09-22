# Setup

## 1. Create the Repository

Create a GitHub repository such as:

`ai-intelligence-hub`

Push this project to the `main` branch.

## 2. Enable Pages

Go to GitHub:

**Settings → Pages**

Set the source to:

**GitHub Actions**

The `pages.yml` workflow will publish the site.

## 3. Test Manually

Go to **Actions -> Deploy GitHub Pages -> Run workflow**.

## 4. Generate Content With Codex

Open this repository in Codex and use natural-language operations from `AGENTS.md`, such as:

- "Generate today's AI Radar"
- "Generate this week's AI Deep Dive"
- "Generate this month's AI Landscape"
- "Research latest MCP developments"
- "Create a POC from this week's most interesting development"

Codex should research current information, update Markdown files, update indexes, and commit changes when asked.

## 5. No API Keys Required

This repository does not need Anthropic, Tavily, OpenAI, or other external LLM API keys. Research and content generation happen inside Codex when you invoke it.

## 6. Production Hardening

Before making the site public:

- Review reports before sharing them widely.
- Never publish customer/proprietary information.
- Do not include credentials, private URLs, or confidential architecture.
- Periodically check external links.
- Pin or review third-party GitHub Actions periodically.
