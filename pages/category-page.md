---
layout: doc
aside: false
---

# 分类

<script setup>
import  { data as posts } from '/.vitepress/content.data.ts';

const postsByCategory = posts.reduce((acc, post) => {
    acc[post.category] = acc[post.category] || [];
    acc[post.category].push(post);
    return acc;
}, {});

</script>

<div>
  <ul>
    <li v-for="category of postsByCategory">
        <h2>{{ category[0].category }}</h2>
        <li v-for="post in category">
            <a :href="post.url">{{ post.title }}</a>
            <span> - {{ post.date.string }}</span>
        </li>
    </li>
  </ul>
</div>
