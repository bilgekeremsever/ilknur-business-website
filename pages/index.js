import Head from "next/head"
import Image from "next/image"
import BsCarousel from "../components/BsCarousel"
import CtaArea from "../components/CtaArea"
import PersonFeatures from "../components/PersonFeatures"

export default function Home() {
  return (
    <main>
      <BsCarousel />
      <CtaArea />
      <section>
        <PersonFeatures />
      </section>

      <section className="home-page__products">
        <h2>Ürünler</h2>
      </section>
    </main>
  )
}
