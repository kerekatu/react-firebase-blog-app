import React, { useCallback, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../../firebase/firebase'
import { AuthContext } from '../../context/auth-context'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'

const Login = () => {
  const handleLogin = useCallback(async (e) => {
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
  }, [])

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <div className="form-container">
      <Form handleOnSubmit={handleLogin}>
        <h2 className="form__title">Sign Up</h2>
        <FormInput label="Email" type="email" id="email" name="email" />
        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
        />
        <button type="submit" className="form__submit">
          Sign In
        </button>
      </Form>
    </div>
  )
}

export default Login
