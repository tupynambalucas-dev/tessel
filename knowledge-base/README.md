# Tessel Engineering Knowledge Base (`@tessel/knowledge-base`)

Internal Docusaurus v3 technical documentation portal and interactive 3D component showcase for the Tessel spatial social ecosystem.

---

## 1. Overview

`@tessel/knowledge-base` hosts the deep-dive architectural documentation, product specifications, release notes, and live React Three Fiber interactive examples for the Tessel platform.

---

## 2. Capabilities & Stack

- **Documentation Framework**: Docusaurus 3.10 (`@docusaurus/core`, `@docusaurus/faster`, `@docusaurus/theme-mermaid`)
- **Interactive 3D Previews**: `@react-three/fiber` and `@react-three/drei` embedded within MDX documentation pages
- **Design Tokens**: Consumes [`@tessel/studio`](../studio/README.md) for brand styling

---

## 3. Directory Layout

```text
knowledge-base/
├── docs/                    # Core engineering, product, and architecture MDX documents
├── releases/                # Release notes and milestone changelogs
├── src/
│   └── pages/               # Custom Docusaurus landing pages (Studio, Tools, Engine)
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Start the local documentation server from `knowledge-base/`:

```bash
# Start in English (http://localhost:3002)
pnpm start

# Start in Brazilian Portuguese (pt-BR)
pnpm start:pt
```

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm start` | Starts the Docusaurus development server on port `3002` (`en`). |
| `pnpm start:pt` | Starts the Docusaurus development server on port `3002` (`pt-BR`). |
| `pnpm build` | Builds the static documentation site into `build/`. |
| `pnpm serve` | Serves the compiled production static bundle locally. |
| `pnpm clear` | Clears Docusaurus caches and generated assets. |
| `pnpm typecheck` | Runs TypeScript verification (`tsc`). |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../README.md`](../README.md)
- **Agent Context Router**: [`../AGENTS.md`](../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
