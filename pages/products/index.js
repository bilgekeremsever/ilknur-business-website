import Head from "next/head"
import Image from "next/image"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { getStrapiMedia } from "../../lib/adminPanelApiMedia"
import { Dropdown } from "react-bootstrap"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"

function Products({ productsPageData }) {
  const breadcrumbs = [{ title: "Anasayfa", path: "/" }, { title: "Ürünler" }]
  return (
    <main className="products-page">
      <Head>
        <title>Ilknur Sever - Ürünler</title>
      </Head>
      <PageHeader pageHeaderText="Ürünler" />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <section>
        <div className="container">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-product-tags">
              Etiketler
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const productsRes = await fetchAdminPanelAPI("/products", { populate: "image" })
  const productsPageData = await productsRes.json()

  return { props: { productsPageData: productsPageData.data } }
}
export default Products
