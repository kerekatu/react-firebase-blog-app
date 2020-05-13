import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import AdminToolbar from '../components/AdminToolbar/AdminToolbar'

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          <Component {...props} />
          {currentUser !== null ? <AdminToolbar /> : null}
        </>
      )}
    />
  )
}

export default PublicRoute
