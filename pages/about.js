import Head from "next/head"
import Image from "next/image"
import PageHeader from "../components/PageHeader"
import { fetchAdminPanelAPI } from "../lib/adminPanelApi"
import Breadcrumbs from "../components/Breadcrumbs"
import ReactMarkdown from "react-markdown"
import { getStrapiMedia } from "../lib/adminPanelApiMedia"

function About({ aboutPageData }) {
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
              src={getStrapiMedia(aboutPageData.attributes.image)}
              alt="slider-item"
              layout="fill"
            />
          </div>
          <ReactMarkdown children={aboutPageData.attributes.body} />
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const aboutRes = await fetchAdminPanelAPI("/about", { populate: "image" })
  const aboutPageData = await aboutRes.json()

  return { props: { aboutPageData: aboutPageData.data } }
}
export default About
