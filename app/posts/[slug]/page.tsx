import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { compileMdx } from "@/lib/mdx";
import { extractTocFromMarkdown } from "@/lib/toc";
import TableOfContents from "@/components/TableOfContents";
import ShareBar from "@/components/ShareBar";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return { title: post.title };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const [mdxContent, tocItems] = await Promise.all([
    compileMdx({ source: post.content }),
    Promise.resolve(extractTocFromMarkdown(post.content)),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <article>
        <header>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Date: {formatDate(post.date)}
            {post.readingTimeMinutes != null && (
              <> | Estimated Reading Time: {post.readingTimeMinutes} min</>
            )}
            {post.author && <> | Author: {post.author}</>}
          </p>
        </header>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-12">
          <aside className="lg:w-56 lg:shrink-0">
            <TableOfContents items={tocItems} />
          </aside>
          <div className="min-w-0 flex-1">
            <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-blue-600 dark:prose-a:text-blue-400">
              {mdxContent}
            </div>
          </div>
        </div>

        {(post.tags?.length ?? 0) > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags!.map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-200 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ShareBar
          url={`/posts/${slug}`}
          title={post.title}
          className="mt-8"
        />
      </article>
    </div>
  );
}
