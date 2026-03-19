import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import type { ReactElement } from "react";

interface CompileMdxOptions {
  source: string;
}

export async function compileMdx({
  source,
}: CompileMdxOptions): Promise<ReactElement> {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: { rehypePlugins: [rehypeSlug] },
    },
  });
  return content;
}
