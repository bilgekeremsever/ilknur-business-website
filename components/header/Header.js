import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Topbar from "./Topbar"
import Navigation from "./Navigation"

const Header = ({ showNavList, setShowNavList }) => {
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
      className={`header ${scrolledHeader ? "scrolled" : ""}`}>
      <Topbar scrolledHeader={scrolledHeader} />
      <div className="header__body container">
        <div className="header__logo">
          <Link href="/">
            <a>
              <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" />
            </a>
          </Link>
        </div>

        <Navigation showNavList={showNavList} setShowNavList={setShowNavList} />
      </div>
    </header>
  )
}

export default Header
