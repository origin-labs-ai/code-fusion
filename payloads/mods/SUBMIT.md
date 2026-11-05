# claudemods.si submission checklist

Every mod in this repository passes the structural check: `.claude-plugin/plugin.json`,
`hooks/hooks.json`, an existing module, a README and a LICENSE. The site's
crawler runs about every six hours; a manual submission is read immediately.

## Current state

| | Count | Notes |
|---|---:|---|
| Already listed | 2 | `typing-test`, `prompt-cache-control-origin-labs-ai` |
| Fresh name | 1 | `session-chats` — no listing on the site yet |
| Duplicate name | 43 | Name already exists; a submission gets an `-origin-labs-ai` suffix |
| **Total** | **46** | |

## How to submit

1. Open https://claudemods.si/mods/new.
2. **GitHub link**: paste the folder URL from the table below.
3. **Description**: leave it empty — the site reads `plugin.json`.
4. **Category**: use the suggested one, or let the listing's "Hooks into" list decide.
5. Submit one mod per form. Do not paste the repository root.

Before a multi-day run, send one message through https://claudemods.si/contact:
*"I maintain a curated MIT pack at origin-labs-ai/code-fusion. The mods keep
their upstream authors and licenses; I am submitting the pack over the next
few days."* That separates a curated pack from a spam run.

## Batch plan

| Day | What to submit |
|---|---|
| 1 | `productivity/session-chats` — the only clean slug |
| 2 | 7 duplicates |
| 3 | 7 duplicates |
| 4 | 7 duplicates |
| 5 | 7 duplicates |
| 6 | 7 duplicates |
| 7 | 8 duplicates |

The 2 listed mods are already live; do not resubmit them. If the goal is
reputation rather than catalog presence, submit only the fresh one and stop —
the other 43 will rank below the original 33k-star listings.

## All 46 mods

| Mod | Path | Status | Suggested category | GitHub folder |
|---|---|---|---|---|
| admin-capability-lockdown | `enterprise/admin-capability-lockdown` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/enterprise/admin-capability-lockdown) |
| 2048 | `games/2048` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/2048) |
| cc-arcade | `games/cc-arcade` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/cc-arcade) |
| chess | `games/chess` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/chess) |
| diff-invaders | `games/diff-invaders` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/diff-invaders) |
| doom | `games/doom` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/doom) |
| flappy | `games/flappy` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/flappy) |
| invaders | `games/invaders` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/invaders) |
| minesweeper | `games/minesweeper` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/minesweeper) |
| pacman | `games/pacman` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/pacman) |
| pet | `games/pet` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/pet) |
| pong | `games/pong` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/pong) |
| snake | `games/snake` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/snake) |
| tetris | `games/tetris` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/tetris) |
| tool-defense | `games/tool-defense` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/tool-defense) |
| typing-test | `games/typing-test` | LISTED | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/games/typing-test) |
| bluesky-feed | `integrations/bluesky-feed` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/integrations/bluesky-feed) |
| linear-tickets | `integrations/linear-tickets` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/integrations/linear-tickets) |
| neon-branch-per-session | `integrations/neon-branch-per-session` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/integrations/neon-branch-per-session) |
| pi-agent-for-claude | `integrations/pi-agent-for-claude` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/integrations/pi-agent-for-claude) |
| vercel-deploys | `integrations/vercel-deploys` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/integrations/vercel-deploys) |
| websearch-to-exa | `integrations/websearch-to-exa` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/integrations/websearch-to-exa) |
| prompt-cache-control | `observability/prompt-cache-control` | LISTED (duplicate) | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/observability/prompt-cache-control) |
| universal-audit-log | `observability/universal-audit-log` | DUPLICATE | Other | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/observability/universal-audit-log) |
| aitmpl | `productivity/aitmpl` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/aitmpl) |
| jev-model-router | `productivity/jev-model-router` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/jev-model-router) |
| jev-skill-suggestion | `productivity/jev-skill-suggestion` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/jev-skill-suggestion) |
| jev-skill-typeahead | `productivity/jev-skill-typeahead` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/jev-skill-typeahead) |
| npm-to-pnpm-rewriter | `productivity/npm-to-pnpm-rewriter` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/npm-to-pnpm-rewriter) |
| session-chats | `productivity/session-chats` | FRESH | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/session-chats) |
| session-time-machine | `productivity/session-time-machine` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/session-time-machine) |
| subagent-tuner | `productivity/subagent-tuner` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/subagent-tuner) |
| ultra-config | `productivity/ultra-config` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/ultra-config) |
| webfetch-cache | `productivity/webfetch-cache` | DUPLICATE | Prompt | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/productivity/webfetch-cache) |
| block-destructive-commands | `security/block-destructive-commands` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/block-destructive-commands) |
| jev-auto-mode | `security/jev-auto-mode` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/jev-auto-mode) |
| jev-guardrails | `security/jev-guardrails` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/jev-guardrails) |
| jev-vercel-sandbox | `security/jev-vercel-sandbox` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/jev-vercel-sandbox) |
| large-edit-confirmation | `security/large-edit-confirmation` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/large-edit-confirmation) |
| protected-paths-guard | `security/protected-paths-guard` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/protected-paths-guard) |
| secret-redactor | `security/secret-redactor` | DUPLICATE | Guardrails | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/security/secret-redactor) |
| agent-flow | `ui/agent-flow` | DUPLICATE | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/ui/agent-flow) |
| git-sidebar | `ui/git-sidebar` | DUPLICATE | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/ui/git-sidebar) |
| stack-viewer | `ui/stack-viewer` | DUPLICATE | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/ui/stack-viewer) |
| tool-timing-badge | `ui/tool-timing-badge` | DUPLICATE | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/ui/tool-timing-badge) |
| turn-inspector | `ui/turn-inspector` | DUPLICATE | Panes | [open](https://github.com/origin-labs-ai/code-fusion/tree/main/payloads/mods/ui/turn-inspector) |

## After submitting

- Check the new listing's **License** field. With the root `LICENSE` now in
  place, it should read MIT after the next daily check. If it still says
  "None given", the site has not re-read the repo yet.
- Check the **Checked** commit. It must point at a commit that contains the
  mod's LICENSE and the root LICENSE.
- If a listing is rejected, run `node scripts/check-mods.mjs` locally and fix
  the exact missing file before resubmitting.

## Do not

- Do not change `author.name` to your name. The site reads it from
  `plugin.json`; changing it is false attribution and the fastest way to get
  reported.
- Do not remove the upstream `repository` or `homepage`.
- Do not delete the per-mod `LICENSE` files.
- Do not submit all 46 in one minute; it looks like a crawler flood.
