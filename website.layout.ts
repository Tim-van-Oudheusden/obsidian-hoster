import { PageLayout, SharedLayout } from "./website/cfg"
import * as Component from "./website/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "Tim-van-Oudheusden/obsidian-hoster",
        // from data-repo-id
        repoId: "R_kgDONrxPQg",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDONrxPQs4CpFmL",
        themeUrl: "https://timvanoudheusden.com/static/giscus", // corresponds to website/static/giscus/
        lightTheme: "light-theme", // corresponds to light-theme.css in website/static/giscus/
        darkTheme: "dark-theme", // corresponds to dark-theme.css website/static/giscus/
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/tim-van-oudheusden/",
      "My other work": "https://github.com/Tim-van-Oudheusden?tab=repositories",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
