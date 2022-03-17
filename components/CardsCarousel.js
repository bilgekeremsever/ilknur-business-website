import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import BsCard from "./BsCard"
import { Button } from "react-bootstrap"
import Link from "next/link"

const CardsCarousel = () => {
  return (
    <div className="container cards-carousel">
      <h2>Ürünler</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <BsCard />
        </SwiperSlide>
        <SwiperSlide>
          <BsCard />
        </SwiperSlide>
        <SwiperSlide>
          <BsCard />
        </SwiperSlide>
        <SwiperSlide>
          <BsCard />
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-5">
        <Link href="/">
          <a className="btn btn-primary">Tümünü Göster</a>
        </Link>
      </div>
    </div>
  )
}

export default CardsCarousel
