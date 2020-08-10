import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/personalLogo.svg')} width="30" /></Link>
    <Link to="/about">About</Link>
    <Link to="/service">Service</Link>
    <Link to="/buy"><button>Buy</button></Link>
    <Link to="/contact">Contact</Link>
  </div>
</div>
)
export default Header
