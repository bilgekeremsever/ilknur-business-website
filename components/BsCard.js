import Link from "next/link"
import { Card, Button } from "react-bootstrap"

/** @param {String} props.cardLinkPrefix A prefix to follow a subpath, e.g. '/urunler/' */

const BsCard = ({ cardFrame, cardData, cardLinkPrefix }) => {
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
        <Card.Title>
          <Link
            href={
              cardLinkPrefix
                ? cardLinkPrefix + cardData.attributes.slug
                : "/" + cardData.attributes.slug
            }>
            <a>{cardData.attributes.title}</a>
          </Link>
        </Card.Title>
        <Card.Text>{cardData.attributes.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          href={
            cardLinkPrefix
              ? cardLinkPrefix + cardData.attributes.slug
              : "/" + cardData.attributes.slug
          }>
          <a>Devamını Oku</a>
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default BsCard
