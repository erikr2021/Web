# Rapid Pest & Wildlife Solutions — website

Landing page for Rapid Pest & Wildlife Solutions. The site is a single self-contained
`index.html` (inline CSS/JS) with assets under `assets/`. Open `index.html` in a browser
to view it locally.

## Claude Code plugins

This repository enables several plugin marketplaces at the project level via
`.claude/settings.json`. When you open the repo in Claude Code and trust the folder,
Claude Code prompts you to install them; run `/reload-plugins` to activate.

- **`anthropic-agent-skills`** ([anthropics/skills](https://github.com/anthropics/skills)) —
  Anthropic's official Agent Skills. Enabled plugins: `document-skills` (PDF, DOCX, PPTX,
  XLSX handling) and `claude-api` (Claude API reference).
- **`ecc`** ([affaan-m/ECC](https://github.com/affaan-m/ECC)) — a large third-party
  marketplace of agents, skills, hooks and rules. Skills are namespaced (e.g. `/ecc:<name>`).

Plugins run with your privileges and can execute code, so only keep marketplaces you
trust. Remove any entry from `extraKnownMarketplaces` / `enabledPlugins` to disable it.
