import { WebsiteTransformerPlugin } from "../types"
import remarkBreaks from "remark-breaks"

export const HardLineBreaks: WebsiteTransformerPlugin = () => {
  return {
    name: "HardLineBreaks",
    markdownPlugins() {
      return [remarkBreaks]
    },
  }
}
