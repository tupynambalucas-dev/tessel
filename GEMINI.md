# 🌌 Tessel - AI Operational Context & Engineering Standards

This file provides the primary context for Gemini CLI when operating within the Tessel monorepo. It defines the architectural philosophy, technical constraints, and operational protocols required to maintain system integrity.

## 📖 Integrated Documentation (SSOT)

The following documents represent the definitive state of the project. AI should reference these before any significant modification.

@./README.md
@./knowledge-base/docs/engineering/architecture.mdx
@./knowledge-base/docs/engineering/styleguide.mdx
@./knowledge-base/docs/engineering/gitflow.mdx
@./knowledge-base/docs/product/vision.mdx
@./knowledge-base/docs/product/masterplan.mdx
@./knowledge-base/docs/product/character-system.mdx
@./knowledge-base/docs/engineering/modular-characters.mdx

## 🏗️ Monorepo Architecture & Workspace Map

Tessel uses a **Hybrid Spatial Social** model managed via `pnpm` workspaces and `turbo`.

### Workspaces
- **`apps/api`**: Fastify 5 backend. Social graph, identity, and persistence layer. [@./apps/api/README.md]
- **`apps/game-server`**: Dedicated Game Server (DGS). Authoritative physics simulation. [@./apps/game-server/README.md]
- **`packages/core`**: The **Single Source of Truth (SSOT)**. Shared logic, Zod schemas, and state machines. [@./packages/core/README.md]
- **`packages/game`**: Three.js/React rendering engine. Focused on WebGPU/TSL implementation. [@./packages/game/README.md]
- **`packages/hub`**: Domain logic and UI components for the asynchronous Social Hub.
- **`platforms/web`**: Vite/React entry point for the browser-based social experience. [@./platforms/web/README.md]
- **`platforms/desktop`**: Electron-based distribution for high-performance spatial simulation. [@./platforms/desktop/README.md]
- **`studio`**: Design-to-code bridge (Penpot) and AI automation infrastructure (Blender/MCP). [@./studio/README.md]
- **`tools`**: Internal developer experience (DX) tools, scripts, and MCP server configuration. [@./tools/README.md]

## 🛠️ Technology Stack & Constraints

- **Runtime**: Node.js (Latest LTS).
- **Language**: TypeScript 5.7+ (Strict Mode).
- **Rendering**: Three.js (v182+) with primary focus on **WebGPU** and **TSL** (Three.js Shading Language).
- **UI**: React 19 + Tailwind CSS (Social Hub) / Custom WebGL Overlays (Game).
- **Physics**: Rapier (WASM-based authoritative simulation).
- **Networking**: 
  - **DGS**: Geckos.io (WebRTC/UDP) for low-latency synchronization.
  - **Hub**: Socket.io / REST for social interactions.
- **Monorepo**: pnpm (using `catalogs` for version management) and Turbo for orchestration.

## 🚀 AI Operational Mandates (Gemini CLI)

1. **Architectural Integrity**: Always prefer logic location in `packages/core` if it impacts more than one workspace.
2. **TSL Priority**: When generating shaders or visual effects, always attempt a **TSL (Three.js Shading Language)** implementation before falling back to GLSL.
3. **Type Safety**: Strictly avoid `any`. Use existing Zod schemas in `@tessel/core` for all data validation.
4. **Tool Orchestration**: You have access to specialized MCP servers (Blender, Penpot, Github, Browser). Use them to bridge design and code gaps.
5. **Context Efficiency**: This `GEMINI.md` is your primary directive. If a task contradicts the Masterplan or Architecture docs, seek clarification.

## 🧪 Testing & Validation Protocols

- **Packages**: Unit testing via **Vitest**.
- **Apps/Platforms**: E2E validation via **Playwright**.
- **Physics**: Headless simulation tests in `apps/game-server` to verify authoritative state.

---
*Professional entry point for the Tessel Development Environment. For private/personal notes, use the internal MEMORY.md.*
