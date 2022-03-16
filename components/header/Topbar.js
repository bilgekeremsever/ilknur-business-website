import useGlobalContext from "../../lib/hooks/useGlobalContext"

const Topbar = ({ scrolledHeader }) => {
  const { email, telephone, telephoneText, storeLink, storeText } =
    useGlobalContext()

  return (
    <div className={`topbar ${scrolledHeader ? "heightNone" : ""}`}>
      <div className="topbar__items container">
        <span className="topbar__items--phrase">Hemen Ulaşın</span>
        <a href={`tel:${telephone}`} className="topbar__items--phone">
          <i className="bi bi-telephone"></i>
          <span>{telephoneText}</span>
        </a>
        <a href={`mailto:${email}`} className="topbar__items--mail">
          <i className="bi bi-envelope"></i>
          <span>{email}</span>
        </a>

        <a href={storeLink} className="topbar__items--store-link">
          <i className="bi bi-box-arrow-up-right"></i>
          {storeText}
        </a>
      </div>
    </div>
  )
}

export default Topbar
