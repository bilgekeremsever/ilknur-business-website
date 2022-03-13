// https://strapi.io/blog/build-a-blog-with-next-react-js-strapi
import qs from "qs"

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${process.env.API_URL || "http://localhost:1337"}${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        (process.env.API_TOKEN ||
          "6e06143445e4f88bbf1030d4d36be81df812601f1cb08491159fc9934626093928653b61b7e94decf31f553100c70b99aa192c81e0798c93cd59881b16c47ed5fa4134eb6f847e42a5e2f63b42e1739ca5121b509c36d2d65746396496a6bd3f4f18f710f6615485861d8745a7a9bfe8c93b4b5c2d6f6befaf10667cb23cf660"),
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}
