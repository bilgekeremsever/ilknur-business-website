import Head from "next/head"
import Image from "next/image"
import BsCard from "../components/BsCard"
import BsCarousel from "../components/BsCarousel"
import CallbackForm from "../components/CallbackForm"
import CardsCarousel from "../components/CardsCarousel"
import CtaArea from "../components/CtaArea"
import PersonFeatures from "../components/PersonFeatures"
import { fetchAdminPanelAPI } from "../lib/adminPanelApi"
import { getStrapiMedia } from "../lib/adminPanelApiMedia"

function Home({ personFeatures, sliders }) {
  return (
    <main className="home-page">
      <Head>
        <title>Ilknur Sever - Anasayfa</title>
      </Head>
      <BsCarousel sliders={sliders.data} />
      <CtaArea />
      <section>
        {personFeatures.data && (
          <PersonFeatures personFeatures={personFeatures.data} />
        )}
      </section>
      <section>
        <CardsCarousel />
      </section>
      <section>
        <CallbackForm />
      </section>
      <section>
        <div className="container latest-educations">
          <div className="row">
            <div className="col-lg-4">
              <BsCard cardFrame={true} />
            </div>
            <div className="col-lg-4">
              <BsCard cardFrame={true} />
            </div>
            <div className="col-lg-4">
              <BsCard cardFrame={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const [personFeaturesRes, slidersRes] = await Promise.all([
    fetchAdminPanelAPI("/person-features"),
    fetchAdminPanelAPI("/sliders", { populate: "image" }),
  ])

  const [personFeatures, sliders] = await Promise.all([
    personFeaturesRes.json(),
    slidersRes.json(),
  ])

  /*
  Below, there is a modification on a constant array of objects (sliders). Since API returns relative image paths, this is necessary.
  The property of a const object can be changed but it can not reference to a new object.
  The values inside the const array can be changed, new items can be added but it can not reference to a new array.
  */
  sliders.data.forEach((slider, index) => {
    const imageAbsolutePath = getStrapiMedia(slider.attributes.image)
    slider.attributes.image.data.attributes.absoluteUrl = imageAbsolutePath
  })

  return { props: { personFeatures, sliders } }
}
export default Home
