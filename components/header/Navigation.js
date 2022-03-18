import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Navigation = ({ showNavList, setShowNavList }) => {
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
        {navigationList.map((navigationItem) => {
          return (
            <li key={navigationItem.path} className="navigation__item">
              <Link href={navigationItem.path}>
                <a
                  className={
                    router.pathname == navigationItem.path ? "active" : ""
                  }>
                  {navigationItem.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
