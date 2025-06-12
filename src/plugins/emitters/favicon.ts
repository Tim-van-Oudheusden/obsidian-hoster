import sharp from "sharp"
import { joinSegments, WEBSITE, FilePath } from "../../util/path"
import { WebsiteEmitterPlugin } from "../types"

export const Favicon: WebsiteEmitterPlugin = () => ({
  name: "Favicon",

  async *emit({ argv }) {
    const iconPath = joinSegments(WEBSITE, "static", "icon.png")

    const dest = joinSegments(argv.output, "favicon.ico") as FilePath

    await sharp(iconPath).resize(48, 48).toFormat("png").toFile(dest)

    yield dest
  },
  async *partialEmit() {},
})
