import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiang's Blog",
  description: "Jiang's 的个人博客",
  head: [["link", { rel: "icon", href: "/image/logo.svg" }]],
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

    socialLinks: [{ icon: "github", link: "https://github.com/jiangjiji" }],

    // 文档配置
    lastUpdated: {
      text: "更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    // 多语言配置
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "亮色主题",
    darkModeSwitchTitle: "暗色主题",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    outlineTitle: "页面导航",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});

