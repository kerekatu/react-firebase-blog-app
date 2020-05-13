import React, { useEffect } from 'react'
import useTheme from '../../hooks/useTheme'

const Navbar = () => {
  const [theme, toggleTheme] = useTheme()

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('id', 'dark-mode')
    } else {
      document.body.removeAttribute('id', 'dark-mode')
    }
  }, [theme])

  return (
    <div className="navbar">
      <button onClick={toggleTheme} className="btn-tertiary">
        <i className={theme === 'dark' ? 'gg-toggle-on' : 'gg-toggle-off'}></i>
      </button>
    </div>
  )
}

export default Navbar
