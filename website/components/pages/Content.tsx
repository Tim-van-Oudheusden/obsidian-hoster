import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { WebsiteComponent, WebsiteComponentConstructor, WebsiteComponentProps } from "../types"

const Content: WebsiteComponent = ({ fileData, tree }: WebsiteComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

export default (() => Content) satisfies WebsiteComponentConstructor
