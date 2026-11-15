# GitHub MCP Context - Tessel

This file provides the necessary context for version control and repository management within the **Tessel** monorepo.

## 🏗️ Project Structure

Refer to the **[Architecture Overview](../../../knowledge-base/docs/engineering/architecture.mdx)** for the detailed monorepo organization and package responsibilities.

## 🛠️ Development Conventions

- **Commits**: Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.
- **Branching Strategy**:
  - New features: `feature/feature-name`
  - Bug fixes: `fix/bug-name`
  - Documentation: `docs/doc-name`
- **Pull Requests**: Always include a summary of changes and reference the corresponding task or issue.

## 🚀 Workflow Principles

### Domain Core First
Any change affecting data models or shared schemas must originate in the core package (`@tessel/core`) before being propagated to the associated applications.

### Automated Verification
Before merging, ensure that `pnpm lint` and `pnpm build` pass successfully across the affected workspaces.
