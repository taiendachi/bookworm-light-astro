export function autoInternalLinks(html, posts) {

  if (!html) return html;

  let content = html;

  const MAX_LINKS = 5;
  let linkCount = 0;

  const usedUrls = new Set();

  for (const post of posts) {

    if (linkCount >= MAX_LINKS) break;

    const slug = post.slug || post.id;

    const url = `/blog/${slug}`;

    const title = post.data.title;

    if (!title) continue;

    if (usedUrls.has(url)) continue;

    const words = title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(" ")
      .filter((w) => w.length > 4);

    for (const word of words) {

      if (linkCount >= MAX_LINKS) break;

      const regex = new RegExp(`\\b(${word})\\b`, "i");

      if (regex.test(content)) {

        content = content.replace(
          regex,
          `<a href="${url}" class="internal-link">$1</a>`
        );

        usedUrls.add(url);
        linkCount++;

        break;
      }
    }
  }

  return content;
}
