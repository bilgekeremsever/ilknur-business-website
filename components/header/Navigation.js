import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              Anasayfa
            </a>
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="/hakkimda">
            <a className={router.pathname == "/hakkimda" ? "active" : ""}>
              Hakkımda
            </a>
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="/urunler">
            <a className={router.pathname == "/urunler" ? "active" : ""}>
              Ürünler
            </a>
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="/egitim">
            <a className={router.pathname == "/egitim" ? "active" : ""}>
              Eğitim
            </a>
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="/iletisim">
            <a className={router.pathname == "/iletisim" ? "active" : ""}>
              İletişim
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
