import Head from "next/head"
import Image from "next/image"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { getStrapiMedia } from "../../lib/adminPanelApiMedia"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"
import DropdownFilter from "../../components/DropdownFilter"
import BsCard from "../../components/BsCard"

function Urunler({ products, productTags }) {
  const breadcrumbs = [{ title: "Anasayfa", path: "/" }, { title: "Ürünler" }]
  return (
    <main className="products-page">
      <Head>
        <title>Ilknur Sever - Ürünler</title>
      </Head>
      <PageHeader pageHeaderText="Ürünler" />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <section>
        <DropdownFilter filters={productTags} />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <BsCard />
            </div>
            <div className="col">
              <BsCard />
            </div>
            <div className="col">
              <BsCard />
            </div>
            <div className="col">
              <BsCard />
            </div>
            <div className="col">
              <BsCard />
            </div>
            <div className="col">
              <BsCard />
            </div>
            <div className="col">
              <BsCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const [productsRes, productTagsRes] = await Promise.all([
    fetchAdminPanelAPI("/products", { populate: "image,product_tags" }),
    fetchAdminPanelAPI("/product-tags"),
  ])

  const [products, productTags] = await Promise.all([
    productsRes.json(),
    productTagsRes.json(),
  ])

  // see: /pages/index.js line 62
  products.data.forEach((product, index) => {
    const imageAbsolutePath = getStrapiMedia(product.attributes.image)
    product.attributes.image.data.attributes.absoluteUrl = imageAbsolutePath
  })

  return { props: { products, productTags } }
}
export default Urunler
