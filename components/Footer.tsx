import { siteConfig } from "@/content/about/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}
        <span className="mx-2">·</span>
        Powered by Next.js
      </div>
    </footer>
  );
}
