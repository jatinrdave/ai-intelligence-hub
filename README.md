# AI Intelligence Hub

An automated, research-driven AI knowledge hub for daily, weekly, and monthly AI engineering intelligence.

## What it does

- **Daily AI Radar**: recent AI developments, tools, papers, GitHub projects, and one practical engineering problem.
- **Weekly Deep Dive**: synthesizes the strongest daily signals into a deeper technical article with architecture and implementation guidance.
- **Monthly AI Landscape**: identifies broader trends, emerging technologies, and practical recommendations.
- Publishes Markdown content as a **GitHub Pages** website.
- Uses GitHub Actions for scheduled generation and deployment.

## Repository layout

```text
daily/          Daily reports
weekly/         Weekly deep dives
monthly/        Monthly landscape reports
research/       Evergreen research notes
tools/          AI tools and frameworks
pocs/           Practical proof-of-concepts
scripts/        Research/content generation scripts
_site/          Generated Jekyll site output (not committed)
```

## Quick start

1. Create a GitHub repository, for example `ai-intelligence-hub`.
2. Copy this project into the repository.
3. Add GitHub Actions secrets:
   - `ANTHROPIC_API_KEY`
   - `TAVILY_API_KEY`
4. In GitHub: **Settings → Pages → Source → GitHub Actions**.
5. Run **Actions → AI Intelligence Hub → Run workflow** once to test.
6. The scheduled workflows then maintain the site automatically.

### Local generation

```bash
npm install
ANTHROPIC_API_KEY=... TAVILY_API_KEY=... npm run daily
```

On Windows PowerShell:

```powershell
$env:ANTHROPIC_API_KEY="..."
$env:TAVILY_API_KEY="..."
npm install
npm run daily
```

## Scheduling

The workflow is configured for:

- Daily: every day
- Weekly: Monday
- Monthly: first day of the month

GitHub Actions uses UTC for the cron examples in this repository. Adjust the cron times to your preferred timezone if required.

## Important

This repository intentionally keeps credentials out of source control. Use GitHub Actions Secrets for API keys.

The generated public site should contain only public information. Do not publish proprietary company information, customer data, credentials, or confidential architecture.
