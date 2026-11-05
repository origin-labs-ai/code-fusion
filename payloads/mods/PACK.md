# Origin Labs Mod Pack

**46 Claude Code mods, vendored from MIT upstreams, pinned in one repository.**

Origin Labs Mod Pack is the mod payload of CodeFusion. Every folder is a
complete Claude Code plugin: manifest, hooks, the hook modules, a README and
the upstream license. Nothing is minified, bundled or patched at install time.

## What is inside

| Category | Mods | What you get |
|---|---:|---|
| Games | 15 | Arcade games and a pet above the prompt: 2048, chess, Doom, Pac-Man, Tetris, Snake, Pong, Minesweeper, typing test, and more. |
| Integrations | 6 | Bluesky, Linear, Neon, Vercel, Exa search, and the Pi agent. |
| Observability | 2 | Prompt-cache meter and a universal audit log. |
| Productivity | 10 | Session tools, Jev routing and skill suggestions, npm→pnpm, config, fetch cache. |
| Security | 7 | Destructive-command blocking, protected paths, secret redaction, Jev guardrails and auto mode. |
| UI | 5 | Agent flow, git sidebar, stack viewer, tool timing, turn inspector. |
| Enterprise | 1 | Admin capability lockdown. |

**Total: 46 mods. All MIT.** Full attribution is in
[THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md).

## Install one mod

Full clone:

```bash
git clone https://github.com/origin-labs-ai/code-fusion.git
claude --plugin-dir code-fusion/payloads/mods/games/typing-test
```

Sparse clone (recommended — downloads only the mod you want):

```bash
git clone --filter=blob:none --sparse https://github.com/origin-labs-ai/code-fusion.git
cd code-fusion
git sparse-checkout set payloads/mods/games/typing-test
claude --plugin-dir payloads/mods/games/typing-test
```

`--plugin-dir` loads the mod for that session only. To keep one, copy its folder
to `.claude/skills/{name}/` and restart Claude Code.

## Licensing

- `LICENSE` at the repository root covers original code in this repository.
- Every mod folder carries its upstream `LICENSE` text.
- [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md) lists every component,
  author, upstream repository and license.
- The `author` and `repository` fields in each `plugin.json` are left as the
  upstream project wrote them. Do not rewrite them to claim authorship.

## Listing on claudemods.si

The crawler reads public folders that contain `.claude-plugin/plugin.json`, a
`hooks/hooks.json`, and at least one existing module. All 46 mods pass that
structural check.

Current state:

| State | Mods | What a submission does |
|---|---|---|
| Listed | `games/typing-test` | Already live at `/mods/typing-test`. |
| Listed (duplicate) | `observability/prompt-cache-control` | Already live as `/mods/prompt-cache-control-origin-labs-ai`. |
| Fresh name | `productivity/session-chats` | No listing on the site yet — this one gets a clean slug. |
| Duplicate name | the other 43 | The name already exists; a submission gets an `-origin-labs-ai` suffix and ranks below the original. |

See [SUBMIT.md](./SUBMIT.md) for the full checklist and batch plan.

## Rules for adding a mod

1. Vendor the upstream folder unchanged.
2. Keep the upstream `author` and `repository` in `plugin.json`.
3. Copy the upstream `LICENSE` into the mod folder.
4. Add a row to `THIRD_PARTY_NOTICES.md`.
5. Run `node scripts/check-mods.mjs` before committing.
