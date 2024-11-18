---
layout: doc
title: VitePress 使用
date: 2024-11-11
---

# VitePress 使用

## 对比vue-press, jekyll, docusaurus

- vs jekyll
  
  jekyll基于ruby，社区主题很多，但是另外一个技术栈了。目前没有想到去了解ruby所以就不使用了。

- vs docusaurus
  
  docusaurus使用的是react，字体渲染的没有vue-press和vite-press好看。就直接放弃了🤣。

- vs vue-press
  
  发现vue-press社区没有那么活跃，github上讨论也没有vite-press多。而且很多技术文档都是用vite-press搭建的。所以就把自己的文档换成了vite-press。

## 侧边栏自动生成

要自己把写的每篇文章手动添加到配置中真的太累了，所以一开始就打算自动生成。找到了一个比较好用的插件[vitepress-sidebar](https://vitepress-sidebar.cdget.com/)。
其中遇到几个问题：

- 因为我的文档结构和官方文档有区别，docs目录和.vitepress处于同级。所以需要额外配置一下，不然无法正常查找md文件。
- 预期的排序是按照文件名排序，但是实际是我想按照文件创建时间排序。最后折中的办法就是在文档前面加上日期来处理了。

```ts
sidebar: generateSidebar({
    documentRootPath: "/",
    scanStartPath: "/docs/",
    sortMenusByName: true,
    sortMenusOrderByDescending: true,
}),
```

## 国际化&翻译

一开始我是自己翻译节点，发现会漏掉很多翻译。比如outline上面的页面导航文字、搜索上面的hint。
所以最后还是使用了[vitepress-i18n](https://vitepress-i18n.cdget.com/)插件。

但是他有一个坑，我是不想要`editLink`打开的，但是配置了之后还是会生成，因为插件给`editLink`赋值了，导致了会自动打开，在页面上出现在*GitHub 上编辑此页面*按钮。

## 存档生成思路

我想有一个页面是展示所有md文档的。vite-press没有提供这个功能，所以只能自己写一个动态生成的页面。
了解了一番后，可以使用这个API`createContentLoader`，遍历得到所有的posts。

需要注意的地方：

- API异步加载的，所以需要使用`await`来获取，需要对返回值经行处理的话可以写在`transform`回调函数中。
- 导入到md中，代码必须是data.ts后缀。

## 首页features支持链接

首页frontmatter中的features支持配置链接，比较好可以直接跳转内容。

```md
linkText: 访问
link: https://jiangjiji.github.io/fabricjs-docs-cn/
```
