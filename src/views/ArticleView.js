import React from 'react'
import Post from '../components/Posts/Post'

const ArticleView = (props) => {
  return (
    <main className="article">
      <Post {...props} />
    </main>
  )
}

export default ArticleView
