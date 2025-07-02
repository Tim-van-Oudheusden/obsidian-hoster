import { WebsiteComponent, WebsiteComponentConstructor, WebsiteComponentProps } from "./types"

export default ((component: WebsiteComponent) => {
  const Component = component
  const DesktopOnly: WebsiteComponent = (props: WebsiteComponentProps) => {
    return <Component displayClass="desktop-only" {...props} />
  }

  DesktopOnly.displayName = component.displayName
  DesktopOnly.afterDOMLoaded = component?.afterDOMLoaded
  DesktopOnly.beforeDOMLoaded = component?.beforeDOMLoaded
  DesktopOnly.css = component?.css
  return DesktopOnly
}) satisfies WebsiteComponentConstructor<WebsiteComponent>
