import React from "react"
import NavBar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div className="mx-auto w-1/2">
        <NavBar />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Built by Szymon</footer>
      </div>
    </>
  )
}

export default Layout
