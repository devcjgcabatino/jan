/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars are explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  aboutSidebar: [
    {
      type: 'category',
      label: 'What is Jan?',
      link: { type: 'doc', id: 'about/about' },
      items: [
        //"about/roadmap",
        'community/community',
      ],
    },
    {
      type: 'category',
      label: 'Who we are',
      link: { type: 'doc', id: 'team/team' },
      items: ['team/join-us', 'team/contributor-program'],
    },
    'wall-of-love',
    {
      type: 'category',
      label: 'How We Work',
      link: { type: 'doc', id: 'how-we-work' },
      items: [
        'how-we-work/strategy/strategy',
        'how-we-work/project-management/project-management',
        {
          type: 'category',
          label: 'Engineering',
          link: { type: 'doc', id: 'how-we-work/engineering/engineering' },
          items: [
            'how-we-work/engineering/ci-cd',
            'how-we-work/engineering/qa',
          ],
        },
        'how-we-work/product-design/product-design',
        'how-we-work/analytics/analytics',
        'how-we-work/website-docs/website-docs',
      ],
    },
    'acknowledgements',
  ],
  productSidebar: [
    {
      type: 'category',
      label: 'Platforms',
      collapsible: false,
      items: [
        'platforms/desktop',
        'server-suite/home-server',
        // "server-suite/enterprise",
        // "platforms/mobile",
        // "platforms/hub",
      ],
    },
    {
      type: 'category',
      collapsible: true,
      collapsed: false,
      label: 'Features',
      link: { type: 'doc', id: 'features/features' },
      items: [
        'features/local',
        'features/remote',
        'features/api-server',
        'features/extensions-framework',
        'features/agents-framework',
        'features/data-security',
      ],
    },
    // NOTE: Jan Server Suite will be torn out into it's own section in the future
    // {
    //   type: "category",
    //   label: "Jan Server Suite",
    //   link: { type: "doc", id: "server-suite/server-suite" },
    //   items: [
    //     "server-suite/admin-console",
    //     "server-suite/identity-access-management",
    //     "server-suite/audit-compliance",
    //     "server-suite/observability",
    //   ],
    // },
  ],
  solutionSidebar: [
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      collapsible: true,
      items: ['solutions/ai-pc', 'solutions/chatgpt-alternative'],
    },
    {
      type: 'category',
      label: 'Sectors',
      collapsed: true,
      collapsible: true,
      items: [
        'solutions/finance',
        'solutions/healthcare',
        'solutions/legal',
        'solutions/government',
      ],
    },
    {
      type: 'category',
      label: 'Organization Type',
      collapsed: true,
      collapsible: true,
      items: [
        'solutions/developers',
        'solutions/consultants',
        'solutions/startups',
        'solutions/enterprises',
      ],
    },
  ],

  pricingSidebar: ['pricing/pricing'],
  ecosystemSidebar: [
    'ecosystem/ecosystem',
    {
      type: 'category',
      label: 'Partners',
      link: { type: 'doc', id: 'partners/partners' },
      collapsible: true,
      items: ['partners/become-a-partner'],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'integrations' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrations',
        },
      ],
    },
  ],
  guidesSidebar: [
    {
      type: 'autogenerated',
      dirName: 'guides',
    },
  ],
  developerSidebar: [
    {
      type: 'autogenerated',
      dirName: 'developer',
    },
  ],
  docsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'docs',
    },
  ],
  blogSidebar: [
    {
      type: 'autogenerated',
      dirName: 'blog',
    },
  ],
}

module.exports = sidebars
