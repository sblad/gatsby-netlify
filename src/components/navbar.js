import React from "react"
import NavLink from "./navlink"

function Navbar() {
  return (
    <nav className="flex justify-between item-center">
      <h1 className="tracking-wide font-bold text-4xl text-gray-500">
        My blog
      </h1>
      <ul className="flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/author">Author</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
