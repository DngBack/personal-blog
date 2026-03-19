import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-zinc-100/50 p-6 transition hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-zinc-600">
      <Link href={`/posts/${post.slug}`} className="block">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h2>
      </Link>
      <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
        {post.excerpt}
      </p>
      <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
        Date: {formatDate(post.date)}
        {post.readingTimeMinutes != null && (
          <>
            {" | "}
            Estimated Reading Time: {post.readingTimeMinutes} min
          </>
        )}
        {post.author && (
          <>
            {" | "}
            Author: {post.author}
          </>
        )}
      </p>
    </article>
  );
}
