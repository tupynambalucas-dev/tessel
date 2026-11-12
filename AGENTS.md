# Tessel Spatial Ecosystem Agent Context

This document serves as the root context router (Layer 2) for AI agents operating within
the `tupynambalucas-dev/tessel` proprietary software repository.

## Architectural Boundaries

- **Ecosystem Taxonomy**: Hybrid spatial-social virtual platform, real-time interactive game canvas, and distributed API core.
- **Monorepo Engine**: Turborepo with strict package manager catalogs.
- **Domain Separation**:
  - `apps/api`: Fastify API backend, Redis caching, MongoDB/Mongoose models, BullMQ task workers.
  - `apps/web`: Web platform and client portal.
  - `packages/core`: Shared TypeScript models, contracts, and core utilities.
  - `packages/game`: 3D spatial simulation, Three.js, React Three Fiber, Rapier physics, and Tone.js audio engine.
  - `studio`: Penpot asset synchronizer, Blender pipelines, design tokens, and UI icon catalog.

## Workspace Navigation

- [README.md](./README.md): Primary platform documentation and operational runbook.
- [apps/api/README.md](./apps/api/README.md): API backend architecture and route documentation.
- [packages/core/README.md](./packages/core/README.md): Core platform shared contracts and models.
- [packages/game/README.md](./packages/game/README.md): Spatial canvas, graphics pipeline, and interaction engine.
- [studio/README.md](./studio/README.md): Design system, 3D asset pipeline, and Penpot integration.

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
  - **`readme-architect`**: Authoring or auditing `README.md` files and preserving recursive navigation.
  - **`community-health-architect`**: Auditing and aligning governance and health files.
- **GitHub Flow Plugin (`@tupynambalucas-dev/plugin-github-flow`)**:
  - **`github-flow-operator`**: Executing Git branching, SSH-signed Conventional Commits, and PR lifecycle workflows.
- **Secrets Plugin (`@tupynambalucas-dev/plugin-secrets`)**:
  - **`infisical-vault-operator`**: Managing secrets, environment variables, and Machine Identity tokens.
