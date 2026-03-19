import { siteConfig } from "@/content/about/site";
import { cv, publications } from "@/content/about/cv";
import SocialLinks from "@/components/SocialLinks";

export const metadata = {
  title: "About",
  description: "CV and about",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          About
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          {siteConfig.intro}
        </p>
        <SocialLinks className="mt-6" />
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>
        <ul className="space-y-4">
          {cv.experience.map((item, i) => (
            <li key={i}>
              <div className="font-medium text-zinc-900 dark:text-zinc-100">
                {item.title}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.org} · {item.period}
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Education
        </h2>
        <ul className="space-y-4">
          {cv.education.map((item, i) => (
            <li key={i}>
              <div className="font-medium text-zinc-900 dark:text-zinc-100">
                {item.title}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.org} · {item.period}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Activities
        </h2>
        <ul className="space-y-4">
          {cv.activities.map((item, i) => (
            <li key={i}>
              <div className="font-medium text-zinc-900 dark:text-zinc-100">
                {item.title}
              </div>
              {item.period && (
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.period}
                </div>
              )}
              {item.description && (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Publications
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-sm">
          {publications.map((pub, i) => (
            <li key={i} className="text-zinc-700 dark:text-zinc-300">
              <span>{pub.authors}. </span>
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-600 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
                >
                  {pub.title}
                </a>
              ) : (
                <span>{pub.title}</span>
              )}
              . {pub.venue}. {pub.year}.
              {pub.note && (
                <span className="ml-1 text-zinc-500 dark:text-zinc-500">
                  ({pub.note})
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
