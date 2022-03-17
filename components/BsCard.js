import Link from "next/link"
import { Card, Button } from "react-bootstrap"

const BsCard = ({ cardFrame }) => {
  return (
    <Card className={`bs-card ${cardFrame ? "framed" : ""}`}>
      <Card.Img src="/example-product.jpg" />
      <Card.Body>
        <p className="card-text">
          <small className="text-muted">29.09.2021, Ilknur Sever</small>
        </p>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Link href="/">
          <a className="card-link">Devamını Oku</a>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BsCard
