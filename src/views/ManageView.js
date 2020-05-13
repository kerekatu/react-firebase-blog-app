import React from 'react'
import ManagePost from '../components/Manage/ManagePost'

const ManageView = (props) => (
  <main className="manage">
    <ManagePost {...props} />
  </main>
)

export default ManageView
