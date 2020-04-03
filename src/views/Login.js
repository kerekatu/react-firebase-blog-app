import React, { useCallback, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../firebase/firebase'
import { AuthContext } from '../context/auth-context'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async e => {
      e.preventDefault()
      const { email, password } = e.target.elements
      try {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            return firebase
              .auth()
              .signInWithEmailAndPassword(email.value, password.value)
          })
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <main className="login container">
      <form className="login__form" onSubmit={handleLogin}>
        <h2>Sign Up</h2>
        <label htmlFor="email-field" className="login__label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email-field"
          className="login__input"
        />
        <label htmlFor="password-field" className="login__label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password-field"
          className="login__input"
        />
        <button type="submit" className="login__submit">
          Sign In
        </button>
      </form>
    </main>
  )
}

export default Login
