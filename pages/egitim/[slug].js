import Head from "next/head"
import Image from "next/image"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { getStrapiMedia } from "../../lib/adminPanelApiMedia"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"

const Urun = ({ pageData }) => {
  const breadcrumbs = [
    { title: "Anasayfa", path: "/" },
    { title: "Eğitim", path: "/egitim" },
    { title: pageData.attributes.title },
  ]

  return (
    <main className="single-content-page">
      <Head>
        <title>Ilknur Sever - {pageData.attributes.title}</title>
      </Head>
      <PageHeader pageHeaderText={pageData.attributes.title} />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ratio ratio-16x9">
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
    </main>
  )
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query

  const pageDataRes = await fetchAdminPanelAPI("/courses", {
    filters: { slug: { $eq: slug } },
  })
  const pageData = await pageDataRes.json()

  return { props: { pageData: pageData.data[0] } }
}

export default Urun
