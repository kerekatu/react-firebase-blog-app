import React, { useState } from 'react'
import useFetchMatch from '../../../hooks/useFetchMatch'
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'

const PostItem = props => {
  const response = useFetchMatch('posts', props.match.params.slug)
  const [loading, setLoading] = useState(true)

  if (!response.result) {
    return <span>Loading Post...</span>
  }

  return (
    <>
      {loading ? <Skeleton width={1440} height={400} /> : null}
      <img
        src={response.result.cover_image}
        alt={response.result.cover_image_alt}
        className={loading ? 'hidden' : 'article__img'}
        onLoad={() => setLoading(false)}
      />
      <h1>{response.result.title}</h1>
      <div className="article__details">
        <span className="article__date">
          {response.result.date_pretty} —&nbsp;
        </span>
        <span className="article__author">{response.result.created_by}</span>
      </div>
      <ReactMarkdown
        source={response.result.body}
        escapeHtml={false}
        className="article__text"
      />
    </>
  )
}

export default PostItem
