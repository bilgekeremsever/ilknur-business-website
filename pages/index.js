import Head from "next/head"
import Image from "next/image"
import BsCarousel from "../components/BsCarousel"
import CtaArea from "../components/CtaArea"

export default function Home() {
  return (
    <main>
      <BsCarousel />
      <CtaArea />
    </main>
  )
}
