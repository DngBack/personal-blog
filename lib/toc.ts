export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function extractTocFromMarkdown(source: string): TocItem[] {
  const toc: TocItem[] = [];
  const lines = source.split("\n");
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2) {
      toc.push({ id: slugify(h2[1]), text: h2[1].trim(), level: 2 });
    } else if (h3) {
      toc.push({ id: slugify(h3[1]), text: h3[1].trim(), level: 3 });
    }
  }
  return toc;
}
