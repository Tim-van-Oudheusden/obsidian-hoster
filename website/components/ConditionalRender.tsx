import { WebsiteComponent, WebsiteComponentConstructor, WebsiteComponentProps } from "./types"

type ConditionalRenderConfig = {
  component: WebsiteComponent
  condition: (props: WebsiteComponentProps) => boolean
}

export default ((config: ConditionalRenderConfig) => {
  const ConditionalRender: WebsiteComponent = (props: WebsiteComponentProps) => {
    if (config.condition(props)) {
      return <config.component {...props} />
    }

    return null
  }

  ConditionalRender.afterDOMLoaded = config.component.afterDOMLoaded
  ConditionalRender.beforeDOMLoaded = config.component.beforeDOMLoaded
  ConditionalRender.css = config.component.css

  return ConditionalRender
}) satisfies WebsiteComponentConstructor<ConditionalRenderConfig>
