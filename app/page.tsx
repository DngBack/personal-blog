import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/content/about/site";
import SocialLinks from "@/components/SocialLinks";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          👋 Welcome to {siteConfig.name}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {siteConfig.intro}
        </p>
        <SocialLinks className="mt-4" />
      </section>

      <section>
        <h2 className="sr-only">Posts</h2>
        <ul className="flex flex-col gap-6">
          {posts.length === 0 ? (
            <li className="rounded-lg border border-zinc-200 bg-zinc-100/50 p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
              <p className="text-zinc-600 dark:text-zinc-400">
                No posts yet. Add MDX files to <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">content/posts/</code> to see them here.
              </p>
            </li>
          ) : (
            posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
