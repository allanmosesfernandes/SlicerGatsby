import { Link } from 'gatsby'
import React from 'react'
import { NavbarStyled } from './NavbarStyles'
import Logo from './Logo'
const Navbar = () => {
  return (
    <NavbarStyled>
        <ul>
            <li>
                <Link to="/">Hot Now</Link>
            </li>
            <li>
                <Link to="/pizzas">Pizza Menu</Link>
            </li>
            <li>
                <Link to="/"><Logo /></Link>
            </li>
            <li>
                <Link to="/slicemasters">Slicemasters</Link>
            </li>

            <li>
                <Link to="/order">Order Ahead</Link>
            </li>
        </ul>
    </NavbarStyled>
  )
}

export default Navbar