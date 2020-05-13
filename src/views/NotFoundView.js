import React from 'react'
import NotFound from '../components/NotFound/NotFound'

const NotFoundView = (props) => (
  <main className="not-found">
    <NotFound {...props} delay={5000} />
  </main>
)

export default NotFoundView
