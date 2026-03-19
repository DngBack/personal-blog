# Personal Blog

A minimal personal blog and CV site (Next.js + MDX + Tailwind), inspired by [Lil'Log](https://lilianweng.github.io/). Deploy on Vercel; write posts in Markdown and rebuild on merge.

## Features

- **Two main pages**: Posts (blog) and About (CV, publications, social links)
- **Dark/light theme** with toggle in the header
- **MDX posts** in `content/posts/` with frontmatter (title, date, excerpt, tags, author)
- **Table of contents** and reading time on each post
- **Share bar** and tags at the bottom of posts

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to add a new post

1. **Option A – create file by hand**  
   Add a new `.mdx` file under `content/posts/`, for example `content/posts/my-new-post.mdx`.

2. **Option B – use the script**  
   Run:
   ```bash
   npm run new-post "My New Post Title"
   ```
   This creates `content/posts/my-new-post-title.mdx` with placeholder frontmatter.

**Frontmatter** (YAML at the top of the file):

```yaml
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "Short summary for the post list."
author: "Your Name"
tags: ["Tag1", "Tag2"]
---
```

After adding or editing posts, commit and push (or merge). If the repo is connected to Vercel, the site will rebuild and deploy automatically.

## Configuration

- **Site name, intro, social links**: edit `content/about/site.ts`.
- **CV and publications**: edit `content/about/cv.ts`.
- **Share links base URL**: set `NEXT_PUBLIC_SITE_URL` in your environment (e.g. in Vercel) so share buttons use the correct URL.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), click **Add New** → **Project** and import the repo.
3. Leave build settings as default (Vercel detects Next.js).
4. Deploy. Each push or merge to the main branch will trigger a new build.

## Project structure

```
app/           # Next.js App Router pages
components/     # Header, Footer, PostCard, SocialLinks, etc.
content/posts/  # MDX blog posts
content/about/ # site config, CV, publications
lib/            # posts, mdx, toc helpers
scripts/        # new-post script
```

## License

Apache-2.0
