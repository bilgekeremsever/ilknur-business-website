import Image from "next/image"
import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

const CallbackForm = () => {
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
    <div className="container callback-form">
      <div className="row">
        <div className="col-lg-6 callback-form__form">
          <h2>Sizi Arayalım</h2>
          <p>Bilgilerinizi gönderin, en kısa zamanda size ulaşalım.</p>
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
                <Form.Select aria-label="Konu Seçimi">
                  <option>Konu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit">GÖNDER</Button>
          </Form>
        </div>
        <div className="col-lg-6 callback-form__image">
          <Image
            src="/example-person.png"
            alt="example-person"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default CallbackForm
