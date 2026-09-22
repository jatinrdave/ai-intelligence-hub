# Setup

## 1. Create the repository

Create a GitHub repository such as:

`ai-intelligence-hub`

Push this project to the `main` branch.

## 2. Add secrets

Go to:

**Repository → Settings → Secrets and variables → Actions**

Add:

- `ANTHROPIC_API_KEY`
- `TAVILY_API_KEY`

Optional repository variable:

- `ANTHROPIC_MODEL`

If the model variable is omitted, the workflow uses the model configured in `scripts/generate.mjs`.

## 3. Enable Pages

Go to:

**Settings → Pages**

Set the source to:

**GitHub Actions**

The `pages.yml` workflow will publish the site.

## 4. Test manually

Go to:

**Actions → AI Intelligence Hub → Run workflow**

Choose `daily`.

Then check the commit and Pages deployment.

## 5. Timezone

The example schedules use UTC. For India Standard Time, add 5 hours 30 minutes when choosing the UTC cron time.

For example:

- 09:00 UTC = 14:30 IST
- 09:30 UTC = 15:00 IST
- 10:00 UTC = 15:30 IST

Change the cron expressions in `.github/workflows/ai-intelligence.yml` to your preferred publishing times.

## 6. Production hardening

Before making the site public:

- Review generated content.
- Keep secrets exclusively in GitHub Secrets.
- Never publish customer/proprietary information.
- Consider a human review gate if the content will represent you or your organization publicly.
- Pin or review third-party GitHub Actions periodically.
