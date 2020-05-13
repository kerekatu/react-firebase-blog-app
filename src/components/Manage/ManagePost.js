import React from 'react'
import EditPost from './EditPost'
import AddPost from './AddPost'

const ManagePost = ({ match }) => {
  return (
    <>
      {match.path === '/edit/:slug' ? <EditPost match={match} /> : <AddPost />}
    </>
  )
}

export default ManagePost
