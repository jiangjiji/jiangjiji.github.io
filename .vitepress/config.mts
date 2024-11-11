import { DefaultTheme, defineConfig, UserConfig } from 'vitepress';
import { withI18n } from 'vitepress-i18n';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig<DefaultTheme.Config> = {
  title: "Jiang's Blog",
  description: "Jiang's 的个人博客",
  lang: "zh-CN",
  sitemap: {
    hostname: "https://jiangjiji.github.io/",
  },
  themeConfig: {
    // 首页设置
    logo: "/image/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "存档", link: "/pages/latest-page" },
      { text: "分类", link: "/pages/category-page" },
      { text: "关于我", link: "/pages/about" },
    ],

    sidebar: generateSidebar({
      documentRootPath: "/",
      scanStartPath: "/docs/",
      sortMenusByName: true,
      sortMenusOrderByDescending: true
    }),

    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/jiangjiji/jiangjiji.github.io/edit/master/:path",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/jiangjiji" }],

    // 文档配置
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
};

const vitePressI18nConfig = {
  // VitePress I18n config
  locales: ['zhHans'],
  searchProvider: "local" // enable search with auto translation
};

export default defineConfig(withI18n(vitePressConfig, vitePressI18nConfig));
