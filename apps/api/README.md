# Tessel Backend Authority (`@tessel/api`)

Stateless Fastify v5 backend authority responsible for authentication, social graph persistence, background job processing, and Dedicated Game Server (DGS) matchmaking orchestration.

---

## 1. Overview

While Tessel utilizes synchronous 3D instances (`@tessel/game-server`), `@tessel/api` acts as **The Authority** over persistent state:
- **Orchestration**: Manages room instance lifecycles and player matchmaking.
- **Persistence**: Handles MongoDB/Mongoose document models for user accounts and social feeds, plus Redis/BullMQ queues.
- **Contract-Driven**: Validates all payloads against shared Zod v4 contracts in [`@tessel/core`](../../packages/core/README.md).

---

## 2. Capabilities & Domains

| Domain | Path | Responsibilities |
| :--- | :--- | :--- |
| **Auth** | `src/domains/auth/` | JWT/session authentication, CSRF protection, and account lifecycle. |
| **Social** | `src/domains/social/` | Asynchronous timelines, friendships, and feed interactions. |
| **Rooms** | `src/domains/rooms/` | Spatial room registry, matchmaking, and DGS provisioning. |

---

## 3. Directory Layout

```text
apps/api/
├── src/
│   ├── config/              # Environment, Redis/BullMQ queues, and Fastify bootstrap
│   ├── domains/             # Bounded domain modules (auth, social, rooms)
│   ├── models/              # Mongoose persistence schemas
│   ├── plugins/             # Fastify plugins (database, security, metrics)
│   ├── types/               # TypeScript interfaces
│   └── utils/               # Shared backend utilities
├── package.json             # Package manifest and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

---

## 4. Configuration & Usage

Configure environment variables via Infisical or a local `.env` file:

```ini
NODE_ENV=development
SERVER_PORT=3000
MONGO_URI=mongodb://localhost:27017/tessel
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=<YOUR_JWT_SECRET>
SESSION_SECRET=<YOUR_SESSION_SECRET>
```

---

## 5. Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Fastify server in watch mode. |
| `pnpm build` | Compiles TypeScript sources to `dist/`. |
| `pnpm start` | Runs the compiled production server from `dist/`. |
| `pnpm typecheck` | Verifies TypeScript type integrity (`tsc --noEmit`). |
| `pnpm lint` | Executes ESLint static analysis. |

---

## 6. Governance & Context

- **Parent Monorepo**: [`../../README.md`](../../README.md)
- **Agent Context Router**: [`../../AGENTS.md`](../../AGENTS.md)
- **Zero-Emoji & Language Policy**: Strictly authored in `en-US` with zero emojis.
