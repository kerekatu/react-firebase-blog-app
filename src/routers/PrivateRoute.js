import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import AdminToolbar from '../components/AdminToolbar/AdminToolbar'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      component={(props) =>
        currentUser ? (
          <>
            <Component {...props} />
            <AdminToolbar />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default PrivateRoute
