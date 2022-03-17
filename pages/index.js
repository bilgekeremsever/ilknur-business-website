import Head from "next/head"
import Image from "next/image"
import BsCarousel from "../components/BsCarousel"
import CallbackForm from "../components/CallbackForm"
import CardsCarousel from "../components/CardsCarousel"
import CtaArea from "../components/CtaArea"
import PersonFeatures from "../components/PersonFeatures"

export default function Home() {
  return (
    <main>
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
        <CallbackForm/>
      </section>
    </main>
  )
}
