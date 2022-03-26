import Head from "next/head"
import Image from "next/image"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { getStrapiMedia } from "../../lib/adminPanelApiMedia"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"


const Urun = () => {
  const router = useRouter()
  const { id } = router.query
  const breadcrumbs = [
    { title: "Anasayfa", path: "/" },
    { title: "Ürünler", path: "/urunler" },
    { title: "URUN" },
  ]

  return (
    <main className="product-page">
      <Head>
        <title>Ilknur Sever - URUN</title>
      </Head>
      <PageHeader pageHeaderText="URUN" />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      {/* <ReactMarkdown></ReactMarkdown> */}
      


    </main>
  )
}

export default Urun
