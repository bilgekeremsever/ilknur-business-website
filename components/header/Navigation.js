import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Navigation = ({ showNavList, setShowNavList }) => {
  const router = useRouter()

  function toggleNavList() {
    if (showNavList) {
      setShowNavList("")
    } else {
      window.scrollTo(0, 0)
      setShowNavList("show-nav-list")
    }
  }

  return (
    <nav className="navigation">
      {showNavList && (
        <Head>
          <style>
            {`body{
            overflow: hidden;
            }`}
          </style>
        </Head>
      )}
      <button
        onClick={() => toggleNavList()}
        className={`hamburger hamburger--spin-r toggle-nav-list ${
          showNavList ? "is-active" : ""
        }`}
        type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <ul className={`navigation__list ${showNavList}`}>
        <li className="navigation__item">
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Anasayfa</a>
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
