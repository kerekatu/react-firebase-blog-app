import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo'

const Header = () => (
  <header className="header">
    <Logo link="/" type="navbar" />
    <Navbar />
  </header>
)

export default Header
