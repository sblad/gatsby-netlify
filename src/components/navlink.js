import React from "react"
import { Link } from "gatsby"

function NavLink({ to, children }) {
  return (
    <li className="p-4 text-gray-400 hover:text-gray-700 transition duration-300">
      <Link to={to} activeClassName="text-green-600">
        {children}
      </Link>
    </li>
  )
}

export default NavLink
