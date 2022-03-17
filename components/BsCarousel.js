// This is the default bootstrap carousel wrapper. e.g. homepage slider. https://react-bootstrap.github.io/components/carousel/
import Image from "next/image"

import { Carousel } from "react-bootstrap"
import { getStrapiMedia } from "../lib/adminPanelApiMedia"

const BsCarousel = ({ sliders }) => {
  return (
    <Carousel variant="dark" className="">
      {sliders &&
        sliders.map((slider) => {
          return (
            <Carousel.Item key={slider.id}>
              <Image
                src={getStrapiMedia(slider.attributes.image)}
                alt="slider-item"
                layout="fill"
              />

              <Carousel.Caption>
                <h3>{slider.attributes.title}</h3>
                <p>{slider.attributes.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
    </Carousel>
  )
}

export default BsCarousel
