import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Hot Now</Link>
            </li>
            <li>
                <Link to="/pizzas">Pizza Menu</Link>
            </li>
            <li>
                <Link to="/">Logo</Link>
            </li>
            <li>
                <Link to="/slicemasters">Slicemasters</Link>
            </li>
            <li>
                <Link to="/order">Order Ahead</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar