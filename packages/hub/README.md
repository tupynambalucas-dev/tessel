# Tessel Social Hub Package (`@tessel/hub`)

Asynchronous social network UI layer, timeline components, private messaging interfaces, and Zustand state stores for the Tessel spatial social ecosystem.

---

## 1. Overview

`@tessel/hub` provides the shared React 19 UI components, GSAP animations, i18next localization bindings, and client-side state stores consumed by both the browser shell ([`platforms/web`](../../platforms/web/README.md)) and the Electron desktop shell ([`platforms/desktop`](../../platforms/desktop/README.md)).

---

## 2. Capabilities & Exports

- **Social Feeds & Timelines**: Persistent community feeds, posts, and media bridge views.
- **Unified Identity & Auth UI**: Login, registration, and profile management screens backed by `@tessel/core` Zod schemas.
- **Reactive State Management**: Zustand stores synchronizing social notifications and room matchmaking transitions with the 3D canvas (`@tessel/game`).

---

## 3. Directory Layout

```text
packages/hub/
├── src/
│   └── index.ts             # Public package entrypoint
├── package.json             # Package manifest and catalog dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Import components and stores directly within host platform shells:

```typescript
import * as Hub from '@tessel/hub';
```

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm build` | Cleans `dist/` and compiles TypeScript declarations and bundles. |
| `pnpm typecheck` | Verifies TypeScript types (`tsc --noEmit`). |
| `pnpm lint` | Runs ESLint across package source files. |
| `pnpm clean` | Removes `dist/` and `tsconfig.tsbuildinfo`. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
