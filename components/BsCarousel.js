// This is the default bootstrap carousel wrapper. e.g. homepage slider. https://react-bootstrap.github.io/components/carousel/ 
import Image from "next/image"

import { Carousel } from "react-bootstrap"

const BsCarousel = () => {
  return (
    <Carousel variant="dark" className="">
      <Carousel.Item>
        <Image
          src="/example-slider-img.jpg"
          alt="slider-item"
          layout="fill"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/example-slider-img.jpg"
          alt="slider-item"
          layout="fill"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BsCarousel
