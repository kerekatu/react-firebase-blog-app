import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown/with-html'

const Card = ({ content }) => {
  return (
    <article className="card">
      <Link to={`/posts/${content.slug}`} className="card__link">
        <img
          src={content.cover_image}
          alt={content.cover_image_alt}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">
            <span className="card__category">{content.category}</span>
            <h3>{content.title}</h3>
          </div>
          <ReactMarkdown
            source={`${content.body.substring(0, 100)}...`}
            escapeHtml={false}
          />
          <div className="card__details">
            <span className="card__date">{content.date_pretty} —&nbsp;</span>
            <span className="card__author">{content.created_by}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Card
