import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = ({ history, delay = 5000 }) => {
  useEffect(() => {
    const timeout = setTimeout(() => history.push('/'), delay)

    return () => clearTimeout(timeout)
  }, [delay, history])

  return (
    <main className="not-found">
      <h3>Hmm... Sorry, but this page seems not to exist</h3>
      <Link to="/" className="link">
        <span>Wait 5 seconds or click here to go back home</span>
      </Link>
    </main>
  )
}

export default NotFoundPage
