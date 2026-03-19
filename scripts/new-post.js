#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const title = process.argv[2];
if (!title) {
  console.error("Usage: npm run new-post \"Your Post Title\"");
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const date = new Date().toISOString().slice(0, 10);

const frontmatter = `---
title: "${title}"
date: "${date}"
excerpt: ""
author: ""
tags: []
---

Your content here...
`;

const dir = path.join(process.cwd(), "content", "posts");
const filePath = path.join(dir, `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(filePath, frontmatter, "utf-8");
console.log(`Created: ${filePath}`);
