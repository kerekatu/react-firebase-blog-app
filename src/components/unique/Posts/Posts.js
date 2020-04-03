import React, { useState } from 'react'
import useFetchAll from '../../../hooks/useFetchAll'
import Card from '../../shared/Card'

const Posts = () => {
  const [orderBy, setOrderBy] = useState('desc')
  const response = useFetchAll('posts', orderBy)

  if (!response.result) {
    return <span>Loading Posts...</span>
  }

  return (
    <section className="posts">
      <div className="posts__title">
        <h1>{orderBy === 'desc' ? 'Newest Posts' : 'Oldest Posts'}</h1>
        <button
          className="btn-secondary"
          onClick={() =>
            orderBy === 'desc' ? setOrderBy('asc') : setOrderBy('desc')
          }
        >
          <i
            className={orderBy === 'desc' ? 'gg-chevron-down' : 'gg-chevron-up'}
          ></i>
        </button>
      </div>
      {response.result.map((post, index) => (
        <Card content={post} key={index} />
      ))}
    </section>
  )
}

export default Posts
