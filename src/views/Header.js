import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/unique/Navbar/Navbar'

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link to="/" className="header__logo">
        BLOG SYSTEM
      </Link>
    </div>
    <div className="header__right">
      <Navbar />
    </div>
  </header>
)

export default Header
