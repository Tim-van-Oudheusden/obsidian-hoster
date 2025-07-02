import { ComponentType, JSX } from "preact"
import { StaticResources, StringResource } from "../util/resources"
import { WebsitePluginData } from "../plugins/vfile"
import { GlobalConfiguration } from "../cfg"
import { Node } from "hast"
import { BuildCtx } from "../util/ctx"

export type WebsiteComponentProps = {
  ctx: BuildCtx
  externalResources: StaticResources
  fileData: WebsitePluginData
  cfg: GlobalConfiguration
  children: (WebsiteComponent | JSX.Element)[]
  tree: Node
  allFiles: WebsitePluginData[]
  displayClass?: "mobile-only" | "desktop-only"
} & JSX.IntrinsicAttributes & {
    [key: string]: any
  }

export type WebsiteComponent = ComponentType<WebsiteComponentProps> & {
  css?: StringResource
  beforeDOMLoaded?: StringResource
  afterDOMLoaded?: StringResource
}

export type WebsiteComponentConstructor<Options extends object | undefined = undefined> = (
  opts: Options,
) => WebsiteComponent
