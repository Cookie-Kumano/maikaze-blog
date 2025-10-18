import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "まいかぜだいありー",
  tagline: "くっきーの self-hosted なブログです",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://blog.maikaze.moe",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Cookie-Kumano", // Usually your GitHub org/user name.
  projectName: "blog-maikaze", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/maikaze-blog-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "まいかぜだいありー",
      logo: {
        alt: "My Site Logo",
        src: "img/maikaze-icon.png",
      },
      items: [
        {
          href: "https://cookie.kumano.moe",
          label: "くっきーラボ",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Maikaze Servers",
          items: [
            {
              label: "Misskey",
              href: "https://mi.maikaze.moe",
            },
            {
              label: "Nextcloud",
              href: "https://cloud.maikaze.moe",
            },
          ],
        },
        {
          title: "Works",
          items: [
            {
              label: "くっきーラボ",
              href: "https://cookie.kumano.moe",
            },
            {
              label: "pixiv",
              href: "http://www.pixiv.me/cookie_kumano",
            },
            {
              label: "GitHub",
              href: "https://github.com/Cookie-Kumano",
            },
          ],
        },
        {
          title: "SNS",
          items: [
            {
              label: "Mastodon (Yづドン!)",
              href: "https://mstdn.y-zu.org/@Cookie",
            },
            {
              label: "Misskey (Maikaze)",
              href: "https://mi.maikaze.moe/@Cookie",
            },
            {
              label: "Pixelfed (Tokyo)",
              href: "https://pixelfed.tokyo/Cookie",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/DE224_Cookie",
            },
          ],
        },
      ],
      copyright: `CC-BY-NC-ND Cookie`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
