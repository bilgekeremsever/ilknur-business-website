import Head from "next/head"
import Image from "next/image"
import BsCarousel from "../components/BsCarousel"
import CtaArea from "../components/CtaArea"

export default function Home() {
  return (
    <main>
      <BsCarousel />
      <CtaArea />
      <section className="home-page__about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 home-page__about--image">
              <Image
                src="/example-person.png"
                alt="example-person"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="col-lg-6 home-page__about--list">
              <ul>
                <li>
                  <div className="icon">
                    <i className="bi bi-book"></i>
                  </div>
                  <div className="content">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean viverra, dolor at vulputate condimentum, lacus
                      nulla finibus metus, non bibendum metus augue molestie
                      eros.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bi bi-bookmark-check"></i>
                  </div>
                  <div className="content">
                    <h2>Cras eget scelerisque</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean viverra, dolor at vulputate condimentum, lacus
                      nulla finibus metus, non bibendum metus augue molestie
                      eros.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <div className="content">
                    <h2>Nunc et metus nec</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean viverra, dolor at vulputate condimentum, lacus
                      nulla finibus metus, non bibendum metus augue molestie
                      eros.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
