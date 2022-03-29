import Head from "next/head"
import Image from "next/image"
import PageHeader from "../components/PageHeader"
import { fetchAdminPanelAPI } from "../lib/adminPanelApi"
import Breadcrumbs from "../components/Breadcrumbs"
import ReactMarkdown from "react-markdown"
import { getStrapiMedia } from "../lib/adminPanelApiMedia"

function Hakkimda({ aboutPageData }) {
  const breadcrumbs = [{ title: "Anasayfa", path: "/" }, { title: "Hakkımda" }]
  return (
    <main className="about-page">
      <Head>
        <title>Ilknur Sever - Hakkımızda</title>
      </Head>
      <PageHeader pageHeaderText="Hakkımızda" />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <section>
        <div className="container">
          <div className="about-page__image">
            <Image
              src={aboutPageData.attributes.image.data.attributes.absoluteUrl}
              alt="slider-item"
              layout="fill"
            />
          </div>
          <ReactMarkdown>{aboutPageData.attributes.body}</ReactMarkdown>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const aboutRes = await fetchAdminPanelAPI("/about", { populate: "image" })
  const aboutPageData = await aboutRes.json()

  // see: /pages/index.js line 62
  const imageAbsolutePath = getStrapiMedia(aboutPageData.data.attributes.image)
  aboutPageData.data.attributes.image.data.attributes.absoluteUrl = imageAbsolutePath;

  return { props: { aboutPageData: aboutPageData.data } }
}
export default Hakkimda
