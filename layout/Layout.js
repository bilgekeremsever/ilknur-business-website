import Header from "../components/header/Header"
import { useState } from "react"

const Layout = ({ children }) => {
  const [showNavList, setShowNavList] = useState("") // for mobile. set in <Navigation/>

  return (
    <div className={`default-layout ${showNavList}`}>
      <Header showNavList={showNavList} setShowNavList={setShowNavList} />
      {children}
    </div>
  )
}
export default Layout
