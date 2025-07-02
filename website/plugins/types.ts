import { PluggableList } from "unified"
import { StaticResources } from "../util/resources"
import { ProcessedContent } from "./vfile"
import { WebsiteComponent } from "../components/types"
import { FilePath } from "../util/path"
import { BuildCtx } from "../util/ctx"
import { VFile } from "vfile"

export interface PluginTypes {
  transformers: WebsiteTransformerPluginInstance[]
  filters: WebsiteFilterPluginInstance[]
  emitters: WebsiteEmitterPluginInstance[]
}

type OptionType = object | undefined
type ExternalResourcesFn = (ctx: BuildCtx) => Partial<StaticResources> | undefined
export type WebsiteTransformerPlugin<Options extends OptionType = undefined> = (
  opts?: Options,
) => WebsiteTransformerPluginInstance
export type WebsiteTransformerPluginInstance = {
  name: string
  textTransform?: (ctx: BuildCtx, src: string) => string
  markdownPlugins?: (ctx: BuildCtx) => PluggableList
  htmlPlugins?: (ctx: BuildCtx) => PluggableList
  externalResources?: ExternalResourcesFn
}

export type WebsiteFilterPlugin<Options extends OptionType = undefined> = (
  opts?: Options,
) => WebsiteFilterPluginInstance
export type WebsiteFilterPluginInstance = {
  name: string
  shouldPublish(ctx: BuildCtx, content: ProcessedContent): boolean
}

export type ChangeEvent = {
  type: "add" | "change" | "delete"
  path: FilePath
  file?: VFile
}

export type WebsiteEmitterPlugin<Options extends OptionType = undefined> = (
  opts?: Options,
) => WebsiteEmitterPluginInstance
export type WebsiteEmitterPluginInstance = {
  name: string
  emit: (
    ctx: BuildCtx,
    content: ProcessedContent[],
    resources: StaticResources,
  ) => Promise<FilePath[]> | AsyncGenerator<FilePath>
  partialEmit?: (
    ctx: BuildCtx,
    content: ProcessedContent[],
    resources: StaticResources,
    changeEvents: ChangeEvent[],
  ) => Promise<FilePath[]> | AsyncGenerator<FilePath> | null
  /**
   * Returns the components (if any) that are used in rendering the page.
   * This helps Website optimize the page by only including necessary resources
   * for components that are actually used.
   */
  getWebsiteComponents?: (ctx: BuildCtx) => WebsiteComponent[]
  externalResources?: ExternalResourcesFn
}
