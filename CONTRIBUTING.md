# Contributing to CodeFusion

Thanks for your interest in CodeFusion.

## Current contribution scope

This repository does not currently publish a top-level open-source license, and parts of the tree document imported third-party source, binaries or payloads. Until provenance and licensing are reviewed, keep proposed contributions limited to clearly project-authored files:

- `launcher/` — launcher shell and original launch behavior.
- `arch/` — registry and architecture documentation.
- `BRAND.md` and other project-authored documentation.
- `scripts/rebrand/` — consistency tooling, when the change does not inspect, copy or alter imported third-party material.

Do **not** modify, upload, redistribute or repackage imported source trees, binaries, installers, model assets or bundled payloads. Do not assume that the repository grants rights to third-party material.

## Before opening a pull request

1. Open an issue describing the problem and the exact files you intend to change.
2. Wait for maintainer confirmation that the files are within the contribution scope.
3. Keep the pull request focused and explain how it was tested.
4. For registry or launcher changes, run:

```powershell
node scripts/rebrand/check-consistency.mjs
```

5. Include the command output in the pull request description.

Do not commit credentials, API keys, personal data, private artifacts or generated installers.

## Review

A maintainer may ask for provenance information, a narrower diff or additional checks before accepting a contribution. A pull request is not permission to redistribute any third-party component.
