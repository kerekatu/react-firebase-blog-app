import React from 'react'
import PostItem from '../components/unique/Posts/PostItem'

const Post = props => {
  return (
    <main className="article">
      <PostItem {...props} />
    </main>
  )
}

export default Post
