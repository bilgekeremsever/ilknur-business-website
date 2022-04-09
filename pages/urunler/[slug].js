import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { setImageAbsolutePath } from "../../lib/adminPanelApiMedia"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"

const Urun = ({ pageData }) => {
  const breadcrumbs = [
    { title: "Anasayfa", path: "/" },
    { title: "Ürünler", path: "/urunler" },
    { title: pageData.attributes.title },
  ]
  console.log(pageData)
  return (
    <main className="single-content-page">
      <Head>
        <title>Ilknur Sever - {pageData.attributes.title}</title>
      </Head>
      <PageHeader pageHeaderText={pageData.attributes.title} />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${pageData.attributes.youtubeVideoID}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>

              <ReactMarkdown>{pageData.attributes.body}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query

  const pageDataRes = await fetchAdminPanelAPI("/products", {
    filters: { slug: { $eq: slug } },
    populate: "image",
  })
  const pageData = await pageDataRes.json()

  /*
  Below, there is a modification on a constant object. Since API returns relative image paths, this is necessary.
  Backend should be modified to return absolute path on image url fields.
  */
  setImageAbsolutePath(pageData.data[0])

  return { props: { pageData: pageData.data[0] } }
}

export default Urun
