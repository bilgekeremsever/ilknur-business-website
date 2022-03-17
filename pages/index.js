import Head from "next/head"
import Image from "next/image"
import BsCard from "../components/BsCard"
import BsCarousel from "../components/BsCarousel"
import CallbackForm from "../components/CallbackForm"
import CardsCarousel from "../components/CardsCarousel"
import CtaArea from "../components/CtaArea"
import PersonFeatures from "../components/PersonFeatures"

export default function Home() {
  return (
    <main className="home-page">
      <Head>
        <title>Ilknur Sever - Anasayfa</title>
      </Head>
      <BsCarousel />
      <CtaArea />
      <section>
        <PersonFeatures />
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
