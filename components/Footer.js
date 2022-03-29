import Image from "next/image"
import Link from "next/link"
import useGlobalContext from "../lib/hooks/useGlobalContext"

const Footer = () => {
  // duplicated navigation in header, may differ in future.
  const navigationList = [
    {
      name: "Anasayfa",
      path: "/",
    },
    {
      name: "Hakkımda",
      path: "/hakkimda",
    },
    {
      name: "Ürünler",
      path: "/urunler",
    },
    {
      name: "Eğitim",
      path: "/egitim",
    },
    {
      name: "İletişim",
      path: "/iletisim",
    },
  ]
  const { email, telephone, telephoneText, whatsappLink, instagramLink, facebookLink } =
    useGlobalContext()
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>Bana Ulaşın</h4>
            <div className="footer-socials">
              <a href={instagramLink}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href={facebookLink}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href={whatsappLink}>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
            <p className="footer-brand">Bütün hakları saklıdır.</p>
          </div>
          <div className="col-lg-5 footer-about">
            <h4>Hakkımda</h4>
            <ul>
              <li>İlknur Sever</li>
              <li>İzmit / Kocaeli / Türkiye</li>
              <li>Telefon: <a href={`mailto:${telephone}`}>{telephoneText}</a></li>
              <li>E-posta: <a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
          <div className="col-lg-3 footer-navigation">
            <h4>Navigasyon</h4>
            <ul>
              {navigationList.map((navigationItem) => {
                return (
                  <li key={navigationItem.path}>
                    <Link href={navigationItem.path}>
                      <a>{navigationItem.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
