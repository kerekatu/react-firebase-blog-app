import React from 'react'
import useFetchMatch from '../../hooks/useFetchMatch'
import Card from '../Card/Card'

const PostsMatch = ({ match, currentUser }) => {
  const matchParams = match.params.slug
  const responseMatch = useFetchMatch('posts', 'category', matchParams)

  if (!responseMatch.result) {
    return <span>There are no posts in this category...</span>
  }

  return (
    <div>
      {responseMatch.result.map((post, index) => (
        <Card content={post} key={index} user={currentUser} />
      ))}
    </div>
  )
}

export default PostsMatch
