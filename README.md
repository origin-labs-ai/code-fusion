# CodeFusion

CodeFusion is a Windows-oriented launcher/workspace project. Its **Launcher Desktop** shell presents project components by codename and reads their registry from `arch/windows.json`.

> **Status:** Experimental and under active development. Component availability and startability vary. Check the registry and architecture notes before assuming a component is ready.

## Project map

| Path | Purpose |
| --- | --- |
| `launcher/` | Launcher Desktop UI and launch script |
| `arch/windows.json` | Source-of-truth component registry |
| `arch/README.md` | Architecture, component map and naming rules |
| `BRAND.md` | Current naming decisions and unresolved items |
| `windows/` | Component folders and reserved component seats |
| `payloads/` | Bundled payload catalog |
| `scripts/rebrand/` | Naming and consistency tooling |

The launcher currently has startable entry points for **Ingot** and **Onyx**. Other entries may be reserved seats or lack a startable entry point; the registry and launcher script are authoritative.

## Validation

From the repository root:

```powershell
node scripts/rebrand/check-consistency.mjs
```

This checks consistency between the component registry, launcher UI, launcher manifest and component folders.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes. Until third-party provenance and licensing are reviewed, contributions should stay within project-authored launcher, registry and documentation files. Do not modify, redistribute or repackage imported third-party source trees, binaries, installers or payloads as part of a contribution.

## Licensing and provenance

This repository currently has **no top-level license declaration**. Some component folders and payloads document material originating from other projects. Their licenses and redistribution rights are not automatically granted by this repository. Check the upstream project's terms and obtain maintainer approval before using or redistributing any imported material.

For now, do not interpret this repository as granting an open-source license to third-party artifacts or to files that do not have a clear license.
