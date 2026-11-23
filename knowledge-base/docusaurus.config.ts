import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tessel',
  tagline: 'Context bounded architecture integrating game and social network.',
  favicon: 'favicon.ico',

  url: 'https://tessel-project.com', // Placeholder URL
  baseUrl: '/', // Or '/tessel/' if deploying to gh-pages

  organizationName: 'tessel',
  projectName: 'tessel',

  onBrokenLinks: 'throw',

  future: {
    v4: true,
  },

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
        htmlLang: 'pt-BR',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs at the root
        },
        blog: {
          path: 'changelogs',
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription: 'Latest updates and improvements to Tessel.',
          blogSidebarTitle: 'All Versions',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tessel Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/changelog', label: 'Changelog', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/your-org/tessel', // Replace with actual
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Architecture',
              to: '/engineering/architecture',
            },
            {
              label: 'Masterplan',
              to: '/product/masterplan',
            },
            {
              label: 'Product',
              to: '/product/vision',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tessel. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
