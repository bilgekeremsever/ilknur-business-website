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

  /*
  Below, there is a modification on a constant array of objects (sliders, products..). Since API returns relative image paths, this is necessary.
  Backend should be modified to return absolute path on image url fields.
  */
  const imageAbsolutePath = getStrapiMedia(aboutPageData.data.attributes.image)
  aboutPageData.data.attributes.image.data.attributes.absoluteUrl =
    imageAbsolutePath
  /* 
  Useful notes:
  The property of a const object can be changed but it can not reference to a new object.
  The values inside the const array can be changed, new items can be added but it can not reference to a new array.
  */

  return { props: { aboutPageData: aboutPageData.data } }
}
export default Hakkimda
