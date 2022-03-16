import styles from "../../styles/header/navigation.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li
          className={styles.navigationItem}>
          <Link href="/">
            <a className={router.pathname == "/" ? styles.active : ""}>Anasayfa</a>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/hakkimda">
            <a className={router.pathname == "/hakkimda" ? styles.active : ""}>
              Hakkımda
            </a>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/urunler">
            <a className={router.pathname == "/urunler" ? styles.active : ""}>
              Ürünler
            </a>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/egitim">
            <a className={router.pathname == "/egitim" ? styles.active : ""}>
              Eğitim
            </a>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/iletisim">
            <a className={router.pathname == "/iletisim" ? styles.active : ""}>
              İletişim
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
