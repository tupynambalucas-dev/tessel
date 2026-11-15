# Tessel Desktop Client Shell (`@tessel/platform-desktop`)

Cross-platform Electron 41 desktop host shell built with `electron-vite`, React 19, and TypeScript for the Tessel spatial social ecosystem.

---

## 1. Overview

`@tessel/platform-desktop` packages the `@tessel/hub` social layer and `@tessel/game` WebGPU 3D engine into a native desktop application with hardware-accelerated rendering, native window controls, and `electron-builder` distribution packaging.

---

## 2. Capabilities & Stack

- **Desktop Runtime**: Electron 41 (`electron-vite` + `electron-builder`)
- **UI & Spatial Engine**: React 19, `@tessel/hub`, and `@tessel/game`
- **Design System**: `@tessel/studio` tokens and icons

---

## 3. Directory Layout

```text
platforms/desktop/
├── src/
│   ├── main/                # Electron main process lifecycle
│   ├── preload/             # Context-isolated IPC preload bridges
│   └── renderer/            # React 19 + WebGPU renderer application
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Start the desktop client from the monorepo root (`pnpm dev:desktop`) or within `platforms/desktop`:

```bash
pnpm dev
```

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts `electron-vite` in development watch mode. |
| `pnpm build` | Compiles main, preload, and renderer bundles and packages desktop installers. |
| `pnpm typecheck` | Verifies TypeScript types across main, preload, and renderer targets. |
| `pnpm lint` | Runs ESLint across desktop source files. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
