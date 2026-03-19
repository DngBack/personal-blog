"use client";

import { useState } from "react";
import Link from "next/link";
import type { TocItem } from "@/lib/toc";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(true);

  if (items.length === 0) return null;

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-100/80 p-4 dark:border-zinc-700 dark:bg-zinc-800/80">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 text-left text-sm font-medium text-zinc-900 dark:text-zinc-100"
      >
        <span className={`transition-transform ${open ? "rotate-0" : "-rotate-90"}`}>
          ▼
        </span>
        Table of Contents
      </button>
      {open && (
        <ul className="mt-3 space-y-1.5 text-sm">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? "1rem" : 0 }}
            >
              <Link
                href={`#${item.id}`}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
