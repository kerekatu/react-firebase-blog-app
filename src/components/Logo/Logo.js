import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoImage from '../../images/logo.png'

const Logo = ({ link = null, type = '' }) => {
  const logoCondition = type === 'navbar'
  const image = <img src={logoImage} alt="Logo" className="logo__img" />

  return (
    <div className={`logo${logoCondition ? '--navbar' : null}`}>
      {link !== null ? (
        <Link to={link} className="logo__link">
          {image}
        </Link>
      ) : (
        <>{image}</>
      )}
    </div>
  )
}

Logo.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Logo
