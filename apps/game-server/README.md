# Tessel Dedicated Game Server (`@tessel/game-server`)

Stateful Dedicated Game Server (DGS) managing authoritative Rapier 3D physics simulation, room instancing, and low-latency WebRTC UDP state synchronization via Geckos.io.

---

## 1. Overview

`@tessel/game-server` is the authoritative simulation node for Tessel 3D spatial rooms. Each instance manages the fixed-rate tick loop, server-side collision validation, and real-time state broadcasting for connected players.

---

## 2. Capabilities & Stack

- **Authoritative Simulation**: Server-side [Rapier 3D](https://rapier.rs/) WASM physics engine preventing client-side movement spoofing.
- **High-Frequency Sync**: Streams state snapshots at 20–30 Hz over WebRTC Data Channels (`Geckos.io`).
- **Shared Contracts**: Consumes [`@tessel/core`](../../packages/core/README.md) for deterministic physics constants and packet schemas.

---

## 3. Directory Layout

```text
apps/game-server/
├── src/                     # Tick loop, Rapier world authority, and Geckos.io channels
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Provisioned dynamically by [`@tessel/api`](../api/README.md) or run locally during multiplayer simulation development.

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Dedicated Game Server in watch mode. |
| `pnpm build` | Compiles TypeScript sources to `dist/`. |
| `pnpm typecheck` | Verifies TypeScript types (`tsc --noEmit`). |
| `pnpm lint` | Executes ESLint static analysis. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
