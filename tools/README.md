# Tessel Workspace Tools (`@tessel/tools`)

Developer automation utilities, asset code generators, and local Model Context Protocol (MCP) infrastructure configurations for the Tessel monorepo.

---

## 1. Overview

`@tessel/tools` provides internal build scripts, icon/token code generation helpers (`scripts/`), and isolated container configurations (`mcp/`) supporting developer workflows across the Tessel repository.

---

## 2. Capabilities & Structure

- **Code Generation Scripts (`scripts/`)**: Automated React icon and asset index generators.
- **MCP Infrastructure (`mcp/`)**: Local container compose definitions (`mcp/compose.yaml`) for isolated design and repository inspection bridges.

---

## 3. Directory Layout

```text
tools/
├── mcp/                     # Local MCP container compose and configuration files
├── scripts/                 # Asset and icon index generation scripts
├── src/
│   └── index.ts             # Package entrypoint
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Executed by workspace maintainers to regenerate studio asset barrels or validate tooling types:

```bash
pnpm --filter @tessel/tools typecheck
```

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm typecheck` | Verifies TypeScript types across tooling scripts (`tsc --noEmit`). |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../README.md`](../README.md)
- **Agent Context Router**: [`../AGENTS.md`](../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
