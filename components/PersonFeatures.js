import Image from "next/image"

const PersonFeatures = ({ personFeatures }) => {
  return (
    <div className="container person-features">
      <div className="row">
        <div className="col-lg-6 person-features__image">
          <Image
            src="/example-person.png"
            alt="example-person"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="col-lg-6 person-features__list">
          <ul>
            {personFeatures.map((feature) => {
              return (
                <li key={feature.id}>
                  <div className="icon">
                    <i className={feature.attributes.iconClass}></i>
                  </div>
                  <div className="content">
                    <h2>{feature.attributes.title}</h2>
                    <p>{feature.attributes.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonFeatures
