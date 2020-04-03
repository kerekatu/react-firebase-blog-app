import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/auth-context'
import firebase from '../../../firebase/firebase'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const navbar = (
    <div className="navbar">
      <Link to="/login" className="btn-primary bold">
        Sign In
      </Link>
    </div>
  )

  const navbarUser = (
    <div className="navbar">
      <Link to="/add" className="bold">
        Add Post
      </Link>
      <Link to="/edit" className="bold">
        Edit Post
      </Link>
      <button
        className="btn-primary bold"
        onClick={() => firebase.auth().signOut()}
      >
        Sign Out
      </button>
    </div>
  )

  return <>{currentUser ? navbarUser : navbar}</>
}

export default Navbar
