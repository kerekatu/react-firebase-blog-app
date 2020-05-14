import React, { useState } from 'react'
import useFetchMatch from '../../hooks/useFetchMatch'
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'

const Post = (props) => {
  const response = useFetchMatch('posts', 'slug', props.match.params.slug)
  const [loading, setLoading] = useState(true)

  if (!response.result) {
    return <span>Loading Post...</span>
  }

  return (
    <>
      {loading ? <Skeleton width={1440} height={400} /> : null}
      <img
        src={response.result[0].cover_image}
        alt={response.result[0].cover_image_alt}
        className={loading ? 'hidden' : 'article__img'}
        onLoad={() => setLoading(false)}
      />
      <h1>{response.result[0].title}</h1>
      <div className="article__details">
        <span className="article__date">
          {response.result[0].date_pretty} —&nbsp;
        </span>
        <span className="article__author">{response.result[0].created_by}</span>
      </div>
      <ReactMarkdown
        source={response.result[0].body}
        escapeHtml={false}
        className="article__text"
      />
    </>
  )
}

export default Post
