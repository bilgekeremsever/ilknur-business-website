import Image from "next/image"

const PersonFeatures = () => {
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
  );
}

export default PersonFeatures;
