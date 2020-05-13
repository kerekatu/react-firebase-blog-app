import React, { useState, useContext } from 'react'
import useFetchAll from '../../hooks/useFetchAll'
import { AuthContext } from '../../context/auth-context'
import Card from '../Card/Card'
import PostsMatch from './PostsMatch'

const Posts = ({ match }) => {
  const [orderBy, setOrderBy] = useState({
    field: 'date_formatted',
    order: 'desc',
  })
  const { currentUser } = useContext(AuthContext)
  const response = useFetchAll('posts', orderBy)
  const orderCondition = orderBy.order === 'desc'

  if (!response.result) {
    return <span>Loading Posts...</span>
  }

  return (
    <section className="posts">
      {match.path === '/categories/:slug' ? (
        <>
          <div className="posts__title">
            <h1>Category — {match.params.slug}</h1>
          </div>
          <PostsMatch match={match} currentUser={currentUser} />
        </>
      ) : (
        <>
          <div className="posts__title">
            <h1>{orderCondition ? 'Newest Posts' : 'Oldest Posts'}</h1>
            <button
              className="btn-secondary btn-secondary--circle"
              onClick={() =>
                orderCondition
                  ? setOrderBy({ field: 'date_formatted', order: 'asc' })
                  : setOrderBy({ field: 'date_formatted', order: 'desc' })
              }
            >
              <i
                className={orderCondition ? 'gg-chevron-down' : 'gg-chevron-up'}
              ></i>
            </button>
          </div>
          {response.result.map((post, index) => (
            <Card content={post} key={index} user={currentUser} />
          ))}
        </>
      )}
    </section>
  )
}

export default Posts
