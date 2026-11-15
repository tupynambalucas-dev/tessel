# Tessel Design & Asset Studio (`@tessel/studio`)

Centralized design system tokens, SVG React icon library, 3D Blender/VRoid asset pipelines, and self-hosted Penpot design studio orchestration for the Tessel ecosystem.

---

## 1. Overview

`@tessel/studio` bridges visual design and 3D asset authoring with the engineering monorepo, exporting CSS/TypeScript design tokens, brand logos, and React icon components while orchestrating the self-hosted Penpot container stack.

---

## 2. Capabilities & Exports

| Subpath Export | Source Path | Description |
| :--- | :--- | :--- |
| `@tessel/studio/icons` | `./src/icons/index.tsx` | React SVG icon components. |
| `@tessel/studio/logos` | `./src/logos/index.ts` | Official Tessel vector brand marks. |
| `@tessel/studio/tokens` | `./src/tokens/index.ts` | TypeScript design tokens (colors, spacing, typography). |
| `@tessel/studio/tokens.css` | `./src/tokens/tokens.css` | CSS custom property definitions. |
| `@tessel/studio/theme.css` | `./src/tokens/theme.css` | Shared Tailwind CSS v4 theme configuration. |

---

## 3. Directory Layout

```text
studio/
├── assets/                  # Brand vectors, mockups, and raw design sources
├── blender/                 # 3D Blender scenes, VRoid assets, and MCP integration
├── penpot/                  # Self-hosted Penpot Docker Compose stack (compose.yaml)
├── src/
│   ├── icons/               # React SVG icon components
│   ├── images/              # Static raster and vector images
│   ├── logos/               # Brand logotype and isotype exports
│   └── tokens/              # Design system CSS & TypeScript tokens
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

To run the local Penpot design studio stack, configure `studio/penpot/.env` (via Infisical or environment variables):

```ini
PENPOT_SECRET_KEY=<YOUR_PENPOT_SECRET_KEY>
PENPOT_DATABASE_URI=postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB>?sslmode=require
PENPOT_DATABASE_USERNAME=<YOUR_DB_USER>
PENPOT_DATABASE_PASSWORD=<YOUR_DB_PASSWORD>
PENPOT_BUCKET_NAME=<YOUR_BUCKET_NAME>
PENPOT_BUCKET_ACCESS_ID=<YOUR_ACCESS_KEY_ID>
PENPOT_BUCKET_SECRET_KEY=<YOUR_SECRET_ACCESS_KEY>
```

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm penpot:up` | Starts the self-hosted Penpot Docker Compose stack in detached mode. |
| `pnpm penpot:down` | Stops and removes the Penpot Docker Compose containers. |
| `pnpm penpot:reset` | Recreates all Penpot containers from scratch. |
| `pnpm penpot:update` | Pulls the latest Penpot images and restarts the stack. |
| `pnpm aide:up` | Starts the Penpot AI assistant (`aide`) container. |
| `pnpm aide:down` | Stops the Penpot AI assistant (`aide`) container. |
| `pnpm typecheck` | Verifies TypeScript types (`tsc --noEmit`). |
| `pnpm lint` | Runs ESLint across studio source files. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../README.md`](../README.md)
- **Agent Context Router**: [`../AGENTS.md`](../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
