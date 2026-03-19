import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTimeMinutes?: number;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => getSlugFromFilename(f));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts: PostMeta[] = [];

  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post && !post.draft) {
      posts.push({
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        tags: post.tags,
        author: post.author,
        readingTimeMinutes: post.readingTimeMinutes,
      });
    }
  }

  posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const filePath = path.join(POSTS_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const readingTimeMinutes = estimateReadingTime(content);
      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        author: data.author,
        draft: data.draft ?? false,
        readingTimeMinutes,
        content,
      };
    }
  }
  return null;
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
