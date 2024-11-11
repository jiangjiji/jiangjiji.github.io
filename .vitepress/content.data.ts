import { createContentLoader } from 'vitepress';

interface Post {
  title: string
  url: string
  category: string
  date: {
    time: number
    string: string
  }
}

export default createContentLoader("docs/**/*.md", {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        category: frontmatter.category,
        url,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
