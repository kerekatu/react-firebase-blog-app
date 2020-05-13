import React from 'react'
import { NavLink } from 'react-router-dom'
import Emoji from '../Emoji/Emoji'
import firebase from '../../firebase/firebase'

const AdminToolbar = () => {
  function handleSignOut() {
    firebase.auth().signOut()
  }

  return (
    <aside className="toolbar toolbar--active">
      <Emoji symbol="🧰" label="pencil" />
      <div className="toolbar__content">
        <p className="toolbar__title bold">Admin Tools</p>
        <NavLink to="/add">Add Post</NavLink>
        <a href="." onClick={handleSignOut}>
          Sign Out
        </a>
      </div>
    </aside>
  )
}

export default AdminToolbar
