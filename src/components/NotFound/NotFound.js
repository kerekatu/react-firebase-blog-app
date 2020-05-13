import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NotFound = ({ history, delay }) => {
  useEffect(() => {
    const timeout = setTimeout(() => history.replace('/'), delay)

    return () => clearTimeout(timeout)
  }, [delay, history])

  return (
    <>
      <h3>Hmm... Sorry, but this page seems not to exist</h3>
      <Link to="/" className="link">
        <span>Wait {delay / 1000} seconds or click here to go back home</span>
      </Link>
    </>
  )
}

NotFound.propTypes = {
  history: PropTypes.object.isRequired,
  delay: PropTypes.number.isRequired
}

export default NotFound
