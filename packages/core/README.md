# Tessel Core Contracts (`@tessel/core`)

Single Source of Truth (SSOT) library centralizing shared Zod v4 data contracts, XState v5 state machines, Rapier physics constants, and i18n locale definitions across the Tessel ecosystem.

---

## 1. Overview

`@tessel/core` guarantees 100% contract consistency between the asynchronous Social Hub (`@tessel/hub`, `@tessel/api`) and synchronous 3D Instances (`@tessel/game`, `@tessel/game-server`).

---

## 2. Capabilities & Exports

- **Schemas (`Zod v4`)**: Strict runtime validation contracts for user profiles, room configurations, and social posts.
- **State Orchestration (`XState v5`)**: Deterministic finite state machines for matchmaking, room provisioning, and character locomotion.
- **Physics Presets**: Shared Rapier 3D gravity, character controller velocities, and collision group bitmasks.
- **Unified Types**: TypeScript types inferred directly from Zod schemas.

---

## 3. Directory Layout

```text
packages/core/
├── src/                     # Shared schemas, XState machines, constants, and types
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Following the **Shared First** workflow, any modification to cross-service data contracts or character state machines begins in `@tessel/core`. Workspace consumers resolve changes immediately via TypeScript path mappings during development.

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm build` | Compiles TypeScript sources and emits declaration files to `dist/`. |
| `pnpm typecheck` | Performs strict static type analysis (`tsc --noEmit`). |
| `pnpm lint` | Runs ESLint across package sources. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
