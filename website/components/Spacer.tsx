import { WebsiteComponentConstructor, WebsiteComponentProps } from "./types"
import { classNames } from "../util/lang"

function Spacer({ displayClass }: WebsiteComponentProps) {
  return <div class={classNames(displayClass, "spacer")}></div>
}

export default (() => Spacer) satisfies WebsiteComponentConstructor
