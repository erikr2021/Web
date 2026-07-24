# Web

## Claude Code plugins

This repository has the [ECC](https://github.com/affaan-m/ECC) plugin enabled at the
project level via `.claude/settings.json`. ECC is a plugin marketplace of agents,
skills, hooks, and rules for Claude Code.

When you open this repo in Claude Code and trust the folder, Claude Code will prompt you
to install the `ecc` marketplace and the `ecc@ecc` plugin. After installing, run
`/reload-plugins` to activate it. ECC's skills are namespaced under `ecc:`
(e.g. `/ecc:<skill-name>`).

Configuration lives in `.claude/settings.json`:

- `extraKnownMarketplaces` registers the `ecc` marketplace from GitHub (`affaan-m/ECC`).
- `enabledPlugins` enables `ecc@ecc` for everyone working in this repository.
