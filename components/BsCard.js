import Link from "next/link"
import { Card, Button } from "react-bootstrap"

const BsCard = () => {
  return (
    <Card className="bs-card">
      <Card.Img src="/example-product.jpg" />
      <Card.Body>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Link href="/">
          <a className="card-link">Devamını Oku <i className="bi bi-arrow-right"></i> </a>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BsCard
