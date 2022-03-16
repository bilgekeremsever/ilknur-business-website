import styles from "../../styles/header/header.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Topbar from "./Topbar"
import Navigation from "./Navigation"

const Header = () => {
  const [scrolledHeader, setScrolledHeader] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setScrolledHeader(window.pageYOffset > 100 ? true : false)
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      id={styles.header}
      style={{ backgroundColor: scrolledHeader ? "#fff" : "transparent" }}>
      <Topbar scrolledHeader={scrolledHeader} />
      <div className={`${styles.headerBody} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" />
            </a>
          </Link>
        </div>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
