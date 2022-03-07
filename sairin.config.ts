// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: "Georgehu's blog"
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Sairin`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/georgehu716",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/Ezikiel716",
      },
    ],
  },
} as SairinConfig;
