---
layout: doc
aside: false
---

# 最新文章

<script setup>
import  { data as posts } from '/.vitepress/content.data.ts';
</script>

<div>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.title }}</a>
      <span> - {{ post.date.string }}</span>
    </li>
  </ul>
</div>
