// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DoMini',
  tagline: 'A minimalistic HTML document manipulation and traversal javascript library',
  favicon: 'img/domini-favicon.png',

  // Set the production url of your site here
  url: 'https://dominijs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anag0', // Usually your GitHub org/user name.
  projectName: 'domini-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        /*blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-F87BC24RBG',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/domini-social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Home',
          src: 'img/domin-logo-132x2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/anag0/domini',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      autorDescription: "I code because it's fun and sometimes create YouTube content.",
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ernest Marcinko - Author',
            items: [
              {
                label: 'Home',
                to: 'https://ernestmarcinko.com',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/@ernestmarcinko',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/anag0/',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/ernest_marcinko',
              },
            ],
          },
          {
            title: 'Code',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/anag0/domini',
              },
              {
                label: 'npm',
                to: 'https://www.npmjs.com/package/domini',
              },
              {
                label: 'Docs Built with Docusaurus',
                to: 'https://docusaurus.io/',
              },
            ],
          },
          {
            title: 'More from Ernest',
            items: [
              {
                label: 'Ajax Search Pro for WordPress',
                to: 'https://ajaxsearchpro.com/',
              },
              {
                label: 'Ajax Search Lite for WordPress',
                to: 'https://wordpress.org/plugins/ajax-search-lite/',
              },
              {
                label: 'TypeWriter Script',
                to: 'https://ernestmarcinko.com/typewriter/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DoMini, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
