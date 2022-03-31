import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { setImageAbsolutePath } from "../../lib/adminPanelApiMedia"

// Content page (/urunler/ , /egitimler/) data.
export default async function handler(req, res) {
  const contentRes = await fetchAdminPanelAPI(req.body.url, req.body.options)
  const content = await contentRes.json()
  /*
  Below, there is a modification on a constant array of objects (sliders, products..). Since API returns relative image paths, this is necessary.
  Backend should be modified to return absolute path on image url fields.
  */
  content.data.forEach((item) => setImageAbsolutePath(item))

  res.status(200).json(content)
}
