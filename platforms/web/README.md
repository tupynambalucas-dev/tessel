# Tessel Web Client Shell (`@tessel/platform-web`)

Browser-based host shell built on Vite 8 and React 19 that initializes the `@tessel/game` WebGPU spatial engine and `@tessel/hub` social network interface.

---

## 1. Overview

`@tessel/platform-web` acts as the thin browser host shell for the Tessel ecosystem:
- **Engine Initialization**: Bootstraps the React Three Fiber WebGPU canvas (`@tessel/game`).
- **Context Injection**: Provides browser environment providers for `@tessel/hub` components.
- **Contract-Driven**: Consumes data contracts and design tokens from [`@tessel/core`](../../packages/core/README.md) and [`@tessel/studio`](../../studio/README.md).

---

## 2. Capabilities & Stack

- **Bundler**: Vite 8 (`@vitejs/plugin-react-swc` + `@tailwindcss/vite`)
- **UI Runtime**: React 19
- **3D Engine**: `@tessel/game` (Three.js WebGPU + Rapier WASM)

---

## 3. Directory Layout

```text
platforms/web/
├── src/
│   ├── assets/              # Static shell resources
│   ├── components/          # Host layout and viewport wrappers
│   ├── App.tsx              # Root application and engine bootstrap
│   └── main.tsx             # DOM entrypoint
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Start the web client from the monorepo root (`pnpm dev:web`) or within `platforms/web`:

```bash
pnpm dev
```

Accessible locally at `http://localhost:5173`.

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server on port `5173`. |
| `pnpm build` | Builds the production web bundle into `dist/`. |
| `pnpm typecheck` | Verifies TypeScript types (`tsc --noEmit`). |
| `pnpm lint` | Runs ESLint across shell source files. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
