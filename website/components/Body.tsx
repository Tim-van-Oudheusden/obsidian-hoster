// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { WebsiteComponent, WebsiteComponentConstructor, WebsiteComponentProps } from "./types"

const Body: WebsiteComponent = ({ children }: WebsiteComponentProps) => {
  return <div id="website-body">{children}</div>
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies WebsiteComponentConstructor
