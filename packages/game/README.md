# Tessel Spatial Engine (`@tessel/game`)

WebGPU-first 3D spatial simulation engine built on Three.js (TSL), React Three Fiber v9, Rapier 3D physics, XState v5, and Zustand.

---

## 1. Overview

`@tessel/game` is the visual and interactive 3D core of Tessel spatial instances. It renders high-performance 3D scenes, manages local client-side physics prediction with Rapier WASM, and synchronizes state with [`@tessel/game-server`](../../apps/game-server/README.md).

---

## 2. Capabilities & Stack

- **WebGPU Rendering**: Uses the Three.js Node API / Three Shading Language (TSL) for modern GPU pipelines.
- **React Three Fiber (`v9`)**: Declarative 3D scene graph and component lifecycle orchestration.
- **Deterministic Physics**: Client-side Rapier 3D WASM simulation reconciled with authoritative server snapshots.
- **Hybrid State Management**: XState machines (imported from [`@tessel/core`](../core/README.md)) paired with Zustand reactive stores.

---

## 3. Directory Layout

```text
packages/game/
├── src/
│   ├── canvas/              # Platform-agnostic 3D scene orchestrators
│   ├── hooks/               # Custom R3F and Rapier simulation hooks
│   ├── player/              # Character controllers, XState animations, and input handlers
│   ├── store/               # Local Zustand engine stores
│   └── world/               # Physics colliders, triggers, and environment props
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Mounted inside [`@tessel/platform-web`](../../platforms/web/README.md) and [`@tessel/platform-desktop`](../../platforms/desktop/README.md) host shells.

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm build` | Compiles TypeScript sources and declarations to `dist/`. |
| `pnpm typecheck` | Verifies TypeScript types (`tsc --noEmit`). |
| `pnpm lint` | Runs ESLint across package sources. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
