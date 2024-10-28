const LATEST_VERSION_LABEL = 'Latest';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// https://docusaurus.io/docs/3.2.1/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
// https://docusaurus.io/docs/3.2.1/api/docusaurus-config
const config: Config = {
  title: 'GoFrame官网 - 类似PHP-Laravel, Java-SpringBoot的Go企业级开发框架',
  tagline:
    'GoFrame is a modular, powerful, high-performance and enterprise-class application development framework of Golang.',
  favicon: '/img/favicon.ico',
  url: 'https://goframe.org/',
  baseUrl: '/gf-site/',
  trailingSlash: false,
  organizationName: 'gogf',
  projectName: 'gf',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          // https://docusaurus.io/docs/versioning
          versions: {
            current: {
              label: LATEST_VERSION_LABEL,
            },
          },
          // 编辑当前页面的配置
          editUrl: 'https://github.com/gogf/gf-site/blob/main/',
        },
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        blog: {},
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // 搜索
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
        // language of your documentation, see next section
        language: 'zh',
      },
    ],

    // 快速开始
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'quick',
        path: 'quick',
        routeBasePath: 'quick',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 常见问题
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'faq',
        path: 'faq',
        routeBasePath: 'faq',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 版本发布
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'release',
        path: 'release',
        routeBasePath: 'release',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 获得帮助
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'help',
        path: 'help',
        routeBasePath: 'help',
        sidebarPath: './sidebars.ts',
      },
    ],
    // 支持我们
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'supportus',
        path: 'supportus',
        routeBasePath: 'supportus',
        sidebarPath: './sidebars.ts',
      },
    ],
    // 加入我们
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'joinus',
        path: 'joinus',
        routeBasePath: 'joinus',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GoFrame',
      logo: {
        alt: 'GoFrame Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'quick',
          position: 'left',
          label: '快速开始',
        },
        {
          position: 'left',
          label: '开发手册',
          items: [
            {
              label: '框架设计',
              to: '/docs/框架设计',
            },
            {
              label: '开发工具',
              to: '/docs/开发工具',
            },
            {
              label: '组件手册',
              to: '/docs/核心组件',
            },
            {
              label: '微服务开发',
              to: '/docs/微服务开发',
            },
            {
              label: 'WEB服务开发',
              to: '/docs/WEB服务开发',
            },
            {
              label: '服务可观测性',
              to: '/docs/服务可观测性',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'faq',
          position: 'left',
          label: '常见问题',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'release',
          position: 'left',
          label: '发布记录',
        },

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'help',
          position: 'left',
          label: '获得帮助',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'supportus',
          position: 'left',
          label: '支持我们',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'joinus',
          position: 'left',
          label: '加入我们',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/gogf/gf/issues',
          position: 'right',
          label: '问题反馈',
        },
        {
          href: 'https://github.com/gogf/gf',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    // toc目录层级显示设置
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    footer: {
      copyright: `Copyright ©${new Date().getFullYear()} GoFrame OpenSource Team`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'go',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
