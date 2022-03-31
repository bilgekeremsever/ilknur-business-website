import Head from "next/head"
import Image from "next/image"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { setImageAbsolutePath } from "../../lib/adminPanelApiMedia"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"
import DropdownFilter from "../../components/DropdownFilter"
import BsCard from "../../components/BsCard"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Urunler({ productTags }) {
  const breadcrumbs = [{ title: "Anasayfa", path: "/" }, { title: "Ürünler" }]
  const router = useRouter()
  const [products, setProducts] = useState(null)

  let productFetchOptions = { populate: "image,product_tag" }
  useEffect(() => {
    productFetchOptions.filters = {
      product_tag: { id: { $eq: router.query.filter } },
    }
    fetch("/api/list-content", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: "/products", options: productFetchOptions }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [router.query])

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
            {!products && <p>Loading...</p>}
            {products &&
              products.data.map((product) => (
                <div key={product.id} className="col">
                  <BsCard cardData={product} cardLinkPrefix="/urunler/" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const productTagsRes = await fetchAdminPanelAPI("/product-tags")
  const productTags = await productTagsRes.json()

  return { props: { productTags } }
}
export default Urunler
