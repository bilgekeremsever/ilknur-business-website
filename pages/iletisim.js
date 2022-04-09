import Head from "next/head"
import PageHeader from "../components/PageHeader"
import Breadcrumbs from "../components/Breadcrumbs"
import useGlobalContext from "../lib/hooks/useGlobalContext"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useState } from "react"

function Iletisim() {
  const breadcrumbs = [{ title: "Anasayfa", path: "/" }, { title: "İletişim" }]

  const { email, telephone, telephoneText, storeLink, storeText } =
    useGlobalContext()

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <main className="contact-page">
      <Head>
        <title>Ilknur Sever - İletişim</title>
      </Head>
      <PageHeader pageHeaderText="İletişim" />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <section>
        <div className="container">
          <div className="row">
            <p className="strong-phase">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
              velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum ultricies nunc, eu interdum enim convallis pretium.
              Quisque eu neque augue. Aliquam egestas nunc at efficitur
              faucibus. Praesent mauris eros, tincidunt id enim sodales, rhoncus
              malesuada ligula.
            </p>
          </div>

          <hr className="my-5" />
          <div className="row contact-info">
            <div className="col-md-6 col-lg-3 contact-info__block">
              <i className="bi bi-geo-alt contact-info__icon"></i>
              <span className="contact-info__text--small">Adres</span>
              <span className="contact-info__text">
                İzmit / Kocaeli / Türkiye
              </span>
            </div>
            <div className="col-md-6 col-lg-3 contact-info__block">
              <i className="bi bi-telephone contact-info__icon"></i>
              <span className="contact-info__text--small">
                Telefon Numarası
              </span>
              <span className="contact-info__text">
                <a href={`tel:${telephone}`}>{telephoneText}</a>
              </span>
            </div>
            <div className="col-md-6 col-lg-3 contact-info__block">
              <i className="bi bi-envelope-paper contact-info__icon"></i>
              <span className="contact-info__text--small">E-posta Adresi</span>
              <span className="contact-info__text">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
            <div className="col-md-6 col-lg-3 contact-info__block">
              <i className="bi bi-shop-window contact-info__icon"></i>
              <span className="contact-info__text--small">{storeText}</span>
              <span className="contact-info__text">
                <a href={storeLink}>{storeText}</a>
              </span>
            </div>
          </div>
          <hr className="my-5" />
          <h2>Bir Mesaj Gönderin</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formNameSurname">
                <Form.Control required type="text" placeholder="Ad - Soyad" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="E-posta Adresi"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formPhone">
                <Form.Control type="text" placeholder="Telefon" required />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formSubject">
                <Form.Control type="text" placeholder="Konu" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="formBody">
                <Form.Control
                  as="textarea"
                  rows={5}
                  type="text"
                  placeholder="Mesajınız..."
                  required
                />
              </Form.Group>
            </Row>

            <Button size="lg" type="submit">
              GÖNDER
            </Button>
          </Form>
        </div>
      </section>
    </main>
  )
}

/* 
Force page to render server-side in order to benefit global data with contextApi from _app.js.
getInitialProps in _app.js should run in server-side. Check related file.
*/
export async function getServerSideProps() {
  return { props: {} }
}

export default Iletisim
