import { WebsiteConfig } from "./src/cfg"
import * as Plugin from "./src/plugins"

/**
 * Website 4 Configuration
 *
 */
const config: WebsiteConfig = {
  configuration: {
    pageTitle: "Tim van Oudheusden",
    pageTitleSuffix: undefined,
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "timvanoudheusden.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Atkinson Hyperlegible",
        body: "Atkinson Hyperlegible",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#2E2C22",
          dark: "#110F10",
          secondary: "#90b359",
          tertiary: "#B3A959",
          highlight: "rgba(144, 179, 89, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#110F10",
          lightgray: "#2E2C22",
          gray: "#534F34",
          darkgray: "#D4D4D4",
          dark: "#ebebec",
          secondary: "#7d9b4f",
          tertiary: "#9B934F",
          highlight: "rgba(125, 155, 79, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
