import Link from "next/link"
import { Card, Button } from "react-bootstrap"

const BsCard = ({ cardFrame, cardData }) => {
  return (
    <Card className={`bs-card ${cardFrame ? "framed" : ""}`}>
      <Card.Img
        src={
          cardData.attributes.image.data?.attributes.absoluteUrl ??
          `/example-product.jpg`
        }
      />
      <Card.Body>
        {/* <p className="card-text">
          <small className="text-muted">29.09.2021, Ilknur Sever</small>
        </p> */}
        <Card.Title>{cardData.attributes.title}</Card.Title>
        <Card.Text>{cardData.attributes.description}</Card.Text>
        <Link href={`/urunler/${cardData.attributes.slug}`}>
          <a className="card-link">Devamını Oku</a>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BsCard
