import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import BsCard from "../components/BsCard"
import BsCarousel from "../components/BsCarousel"
import CallbackForm from "../components/CallbackForm"
import CardsCarousel from "../components/CardsCarousel"
import CtaArea from "../components/CtaArea"
import PersonFeatures from "../components/PersonFeatures"
import { fetchAdminPanelAPI } from "../lib/adminPanelApi"
import { setImageAbsolutePath } from "../lib/adminPanelApiMedia"

function Home({ personFeatures, sliders, products, courses }) {
  return (
    <main className="home-page">
      <Head>
        <title>Ilknur Sever - Anasayfa</title>
      </Head>
      <BsCarousel sliders={sliders.data} />
      <CtaArea />
      <section>
        <PersonFeatures personFeatures={personFeatures.data} />
      </section>
      <section>
        <CardsCarousel carouselData={products.data} showAllLink='/urunler/' />
      </section>
      <section>
        <CallbackForm />
      </section>
      <section>
        <div className="container latest-courses">
          <h2>Son Eğitim İçerikleri</h2>
          <div className="row">
            {courses.data.map((course) => (
              <div key={course.id} className="col-lg-4">
                <BsCard cardFrame={true} cardData={course} cardLinkPrefix='/egitimler/' />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-5">
        <Link href="/egitim">
          <a className="btn btn-primary btn-lg">Tümünü Göster</a>
        </Link>
      </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const [personFeaturesRes, slidersRes, productsRes, coursesRes] =
    await Promise.all([
      fetchAdminPanelAPI("/person-features"),
      fetchAdminPanelAPI("/sliders", { populate: "image" }),
      fetchAdminPanelAPI("/products", {
        populate: "image",
        sort: ["createdAt:desc"],
        filters: { showInHomepage: { $eq: "true" } },
      }),
      fetchAdminPanelAPI("/courses", {
        populate: "image",
        sort: ["createdAt:desc"],
        pagination: { start: 0, limit: 3 },
      }),
    ])

  const [personFeatures, sliders, products, courses] = await Promise.all([
    personFeaturesRes.json(),
    slidersRes.json(),
    productsRes.json(),
    coursesRes.json(),
  ])

  /*
  Below, there is a modification on a constant array of objects (sliders, products..). Since API returns relative image paths, this is necessary.
  Backend should be modified to return absolute path on image url fields.
  */
  sliders.data.forEach((slider) => setImageAbsolutePath(slider))
  products.data.forEach((product) => setImageAbsolutePath(product))
  courses.data.forEach((course) => setImageAbsolutePath(course))

  return { props: { personFeatures, sliders, products, courses } }
}
export default Home
