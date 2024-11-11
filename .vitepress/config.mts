import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiang's 的个人博客",
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
      { text: "Delphi开发", link: "/docs/doc-windows&delphi/index", activeMatch: "/docs/doc-windows&delphi/" },
      { text: "前端开发", link: "/docs/doc-react/index", activeMatch: "/docs/doc-react/" },
      { text: "读书笔记", link: "/docs/doc-read-book/index", activeMatch: "/docs/doc-read-book/" },
      { text: "写作探索", link: "/docs/doc-other/index", activeMatch: "/docs/doc-other/" },
    ],

    sidebar: [
      {
        text: "Delphi开发",
        items: [{ text: "托盘问题汇总", link: "docs/doc-windows&delphi/2023-11-托盘问题汇总.md" }],
      },
      {
        text: "前端开发",
      },
      {
        text: "读书笔记",
        items: [],
      },
      {
        text: "写作探索",
        items: [],
      },
    ],

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
