# Tessel Spatial Ecosystem Agent Context

This document serves as the root context router (Layer 1) for AI agents operating within
the `tupynambalucas-dev/tessel` proprietary software monorepo.

## Architectural Boundaries

- **Ecosystem Taxonomy**: Hybrid spatial-social virtual platform, real-time WebGPU interactive 3D simulation, and distributed API/DGS authority.
- **Monorepo Engine**: Turborepo with strict pnpm catalogs (`catalogMode: 'strict'`).
- **Domain Separation**:
  - `apps/api`: Fastify 5 API backend authority, Redis caching, MongoDB/Mongoose models, BullMQ task workers.
  - `apps/game-server`: Dedicated Game Server (DGS) running authoritative Rapier 3D WASM simulation and Geckos.io WebRTC UDP data channels.
  - `packages/core`: Single Source of Truth (SSOT) shared TypeScript models, Zod v4 contracts, XState machines, and physics presets.
  - `packages/game`: 3D spatial simulation, Three.js WebGPU / TSL, React Three Fiber v9, Rapier physics, and Tone.js audio engine.
  - `packages/hub`: Asynchronous social network UI components, timelines, and Zustand state stores.
  - `platforms/web`: Vite 8 + React 19 browser host shell.
  - `platforms/desktop`: Electron 41 + electron-vite desktop host shell.
  - `studio`: Brand design tokens, SVG React icon catalog, Penpot compose stack, and Blender 3D asset pipelines.
  - `tools`: Workspace automation scripts and local MCP tooling.
  - `knowledge-base`: Docusaurus v3 technical documentation portal.

## Workspace Navigation

- [README.md](./README.md): Primary platform documentation and operational runbook.
- [apps/api/README.md](./apps/api/README.md): API backend authority architecture and route documentation.
- [apps/game-server/README.md](./apps/game-server/README.md): Dedicated Game Server (DGS) simulation and networking documentation.
- [packages/core/README.md](./packages/core/README.md): Core platform shared contracts, XState machines, and Zod schemas.
- [packages/game/README.md](./packages/game/README.md): Spatial canvas, WebGPU graphics pipeline, and interaction engine.
- [packages/hub/README.md](./packages/hub/README.md): Social Hub UI layer and state synchronization.
- [platforms/web/README.md](./platforms/web/README.md): Web client shell documentation.
- [platforms/desktop/README.md](./platforms/desktop/README.md): Electron desktop client shell documentation.
- [studio/README.md](./studio/README.md): Design system tokens, 3D asset pipeline, and Penpot integration.
- [tools/README.md](./tools/README.md): Workspace automation and MCP tooling documentation.
- [knowledge-base/README.md](./knowledge-base/README.md): Docusaurus engineering knowledge base documentation.

## Governance Standards

- **Branching Model**: Single-Branch GitHub Flow on `main`. Short-lived branches MUST use Conventional Commit prefixes (`feat/`, `fix/`, `docs/`, `chore/`, `refactor/`, `ci/`, `perf/`, `test/`, `build/`, `style/`, `revert/`, `hotfix/`).
- **Cryptographic Signature**: All Git commits and annotated tags MUST be signed with SSH (`git commit -S -m "..."`).
- **Conventional Commits**: All commit messages must follow `<type>[optional (<scope>)][!]: <description>` (`<= 72` chars target, `<= 100` chars maximum).
- **Zero-Emoji Policy**: Emojis are strictly forbidden across all code, PRs, comments, documentation, and agent interactions.
- **Secret Hygiene**: Never commit plaintext tokens. Sourced via Infisical (`infisical run -- ...`) or local `.env` files.
- **Language Policy**: Code, comments, commit messages, and documentation must be written strictly in en-US.

## Architectural Plans & Artifact Dual-Storage Standard

Architectural blueprints, technical analyses, and master plans follow strict enterprise storage standards:
- **Storage Location**: Blueprints, analyses, and reports reside in `plans/<artifact-slug>/` (or `plans/<artifact-slug>.md`), with `.agents/plans/<artifact-slug>/` fully recognized for backward compatibility.
- **Topologies**: Topology 1 (Single-File Artifact) for atomic refactors, analyses, and reports; Topology 2 (Multi-Artifact Suite) for multi-domain frameworks with master `README.md` and numbered domain documents.
- **Dual-Storage Invariant**: Whenever an agent creates an architectural plan, analysis, or report artifact in the Antigravity conversation directory (`<appDataDir>/brain/<conversation-id>/`), an identical synchronized copy MUST ALWAYS be mirrored in `plans/<artifact-slug>/` (or `plans/<artifact-slug>.md`).
- **Ignore & Index Triad**: All repositories ignore `plans/` and `.agents/plans/` in `.gitignore`, while explicitly un-ignoring them in `.ignore` and `.rgignore` (`!plans/`, `!plans/**`, `!.agents/plans/`, `!.agents/plans/**`) and setting `"search.useIgnoreFiles": false` in `.vscode/settings.json` so files can always be attached with `@`.

## Required Skills

Agents operating within this repository MUST autonomously engage the corresponding domain skills:

- **Atelier Plugin (`@tupynambalucas-dev/plugin-atelier`)**:
  - **`plan-architect`**: Designing, structuring, authoring, and auditing architectural plans, technical analyses, and governance reports following the dual-storage standard.
  - **`router-architect`**: Authoring, auditing, or updating hierarchical `AGENTS.md` context routers.
- **Repository Governance Plugin (`@tupynambalucas-dev/plugin-repo`)**:
  - **`monorepo-architect`**: Maintaining monorepo configurations, pnpm catalogs, package scopes, and Turborepo pipelines.
  - **`readme-architect` & `readme-auditor`**: Authoring or auditing `README.md` files and preserving recursive navigation.
  - **`community-health-architect`**: Auditing and aligning governance and health files.
- **GitHub Flow Plugin (`@tupynambalucas-dev/plugin-github-flow`)**:
  - **`github-flow-operator`**: Executing Git branching, SSH-signed Conventional Commits, and PR lifecycle workflows.
- **Secrets Plugin (`@tupynambalucas-dev/plugin-secrets`)**:
  - **`infisical-vault-operator`**: Managing secrets, environment variables, and Machine Identity tokens.
