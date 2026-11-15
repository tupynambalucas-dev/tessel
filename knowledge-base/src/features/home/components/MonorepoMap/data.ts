export interface WorkspaceInfo {
  id: string;
  name: string;
  path: string;
  description: string;
  stack: string[];
  responsibilities: string[];
  ptBR?: Partial<WorkspaceInfo>;
}

export const MONOREPO_OVERVIEW: WorkspaceInfo = {
  id: 'root',
  name: 'Tessel Architecture',
  path: '/',
  description: 'A high-performance, strictly-typed monorepo built on PNPM Workspaces and Turborepo. This architecture enforces strict domain isolation while sharing critical core logic.',
  stack: ['PNPM v10', 'Turborepo', 'TypeScript 6', 'ESLint 9'],
  responsibilities: [
    'Single Source of Truth (SSOT) via /packages/core',
    'Automated Task Orchestration',
    'Context-Driven Development isolation',
    'Shared Design Tokens & Visual Assets'
  ],
  ptBR: {
    name: 'Arquitetura Tessel',
    description: 'Um monorepo de alta performance e tipagem estrita construído com PNPM Workspaces e Turborepo. Esta arquitetura impõe um isolamento rigoroso de domínios enquanto compartilha lógica core crítica.',
    responsibilities: [
      'Fonte Única de Verdade (SSOT) via /packages/core',
      'Orquestração de Tarefas Automatizada',
      'Isolamento de Desenvolvimento Orientado a Contexto',
      'Tokens de Design e Ativos Visuais Compartilhados'
    ]
  }
};

export const WORKSPACES: Record<string, WorkspaceInfo> = {
  hub: {
    id: 'hub',
    name: 'Hub Context',
    path: '/packages/hub',
    description: 'The social heart of Tessel, managing the timeline, groups, economy, and unified authentication.',
    stack: ['React 19', 'Zustand', 'TailwindCSS v4', 'Vite'],
    responsibilities: [
      'Social Timeline and Groups',
      'Marketplace and Inventory',
      'Unified Identity Provider (UI)'
    ],
    ptBR: {
      name: 'Contexto Hub',
      description: 'O coração social do Tessel, gerenciando a timeline, grupos, economia e autenticação unificada.',
      responsibilities: [
        'Timeline Social e Grupos',
        'Marketplace e Inventário',
        'Provedor de Identidade Unificada (UI)'
      ]
    }
  },
  platforms: {
    id: 'platforms',
    name: 'Platform Shells',
    path: '/platforms',
    description: 'The host environments that consume the Hub and Game contexts for Web and Desktop delivery.',
    stack: ['Electron', 'Electron-Vite', 'React 19'],
    responsibilities: [
      'Web Browser Bundling',
      'Native Desktop Integration',
      'Host Environment Setup'
    ],
    ptBR: {
      name: 'Cascas de Plataforma',
      description: 'Os ambientes host que consomem os contextos Hub e Game para entrega Web e Desktop.',
      responsibilities: [
        'Empacotamento para Navegador Web',
        'Integração Nativa Desktop',
        'Configuração do Ambiente Host'
      ]
    }
  },
  studio: {
    id: 'studio',
    name: 'Studio Context',
    path: '/studio',
    description: 'The single source of truth for visual identity, shared tokens, and UI consistency.',
    stack: ['TailwindCSS v4', 'PostCSS', 'Penpot'],
    responsibilities: [
      'Canonical Design Tokens',
      'Brand Asset Management',
      'Visual Consistency across contexts'
    ],
    ptBR: {
      name: 'Contexto Studio',
      description: 'A fonte única de verdade para identidade visual, tokens compartilhados e consistência de UI.',
      responsibilities: [
        'Tokens de Design Canônicos',
        'Gerenciamento de Ativos de Marca',
        'Consistência Visual entre contextos'
      ]
    }
  },
  tools: {
    id: 'tools',
    name: 'Tools Context',
    path: '/tools',
    description: 'Infrastructure orchestration hub and technical automation backbone.',
    stack: ['Model Context Protocol (MCP)', 'Docker', 'Shell Scripts'],
    responsibilities: [
      'AI Agent Context Servers',
      'Dev Environment Setup',
      'CI/CD Pipeline Automation'
    ],
    ptBR: {
      name: 'Contexto de Ferramentas',
      description: 'Hub de orquestração de infraestrutura e espinha dorsal de automação técnica.',
      responsibilities: [
        'Servidores de Contexto para Agentes de IA',
        'Configuração de Ambiente de Desenvolvimento',
        'Automação de Pipelines CI/CD'
      ]
    }
  },
  knowledge: {
    id: 'knowledge',
    name: 'Knowledge Base',
    path: '/knowledge-base',
    description: 'Centralized technical documentation and engineering masterplan.',
    stack: ['Docusaurus v3', 'MDX', 'Mermaid.js'],
    responsibilities: [
      'Engineering Architecture Docs',
      'Product Roadmap & Vision',
      'Internal Developer Portal'
    ],
    ptBR: {
      name: 'Base de Conhecimento',
      description: 'Documentação técnica centralizada e plano mestre de engenharia.',
      responsibilities: [
        'Docs de Arquitetura de Engenharia',
        'Roadmap e Visão do Produto',
        'Portal Interno do Desenvolvedor'
      ]
    }
  }
};
