import { WebsiteComponent, WebsiteComponentConstructor, WebsiteComponentProps } from "./types"

export default ((component: WebsiteComponent) => {
  const Component = component
  const MobileOnly: WebsiteComponent = (props: WebsiteComponentProps) => {
    return <Component displayClass="mobile-only" {...props} />
  }

  MobileOnly.displayName = component.displayName
  MobileOnly.afterDOMLoaded = component?.afterDOMLoaded
  MobileOnly.beforeDOMLoaded = component?.beforeDOMLoaded
  MobileOnly.css = component?.css
  return MobileOnly
}) satisfies WebsiteComponentConstructor<WebsiteComponent>
