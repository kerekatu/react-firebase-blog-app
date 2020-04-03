import React, { useState, useEffect, createContext } from 'react'
import firebase from '../firebase/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser)
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
