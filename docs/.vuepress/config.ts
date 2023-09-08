import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Jiang\'s Blog',
  description: '这是Jiang的Blog', 
 
  theme: defaultTheme({
    logo: '/image/logo.svg',
    
    repo: 'jiangjiji/vue-press-blog',

    sidebar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '技术积累',
        link: '/doc-windows&delphi/',
        children: [
          '/doc-windows&delphi/托盘问题汇总.md',
        ],
      },
      {
        text: '读书笔记',   
        link: '/doc-readbook/',
        children: [],
      },
    ],

    sidebarDepth:0,

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text:'技术积累',
        link:'/doc-windows&delphi/',
      },
      {
        text:'读书笔记',
        link:'/doc-readbook/',
      }
    ],  
  }),

})