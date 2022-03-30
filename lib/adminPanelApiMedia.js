import { getStrapiURL } from "./adminPanelApi"

function getStrapiImage(image) {
  const { url } = image.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}

export function setImageAbsolutePath(item) {
  if(!item.attributes.image.data) return 0; // no image available
  const imageAbsolutePath = getStrapiImage(item.attributes.image)
  item.attributes.image.data.attributes.absoluteUrl = imageAbsolutePath
}
