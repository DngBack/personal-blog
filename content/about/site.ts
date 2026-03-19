export const siteConfig = {
  name: "DngBack",
  /** Used for share links; set NEXT_PUBLIC_SITE_URL in production */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  intro: "Hi, I'm Duong Xuan Bach. I focus on AI—especially generative models and vision-language models (LVLMs). I use this blog to share what I learn and build, from implementation and fine-tuning to real-world applications.",
  socialLinks: {
    github: "https://github.com/DngBack",
    linkedin: "",
    facebook: "",
    youtube: "https://youtube.com/@DngBack",
    twitter: "",
  },
} as const;
