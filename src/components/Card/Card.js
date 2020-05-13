import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown/with-html'

const Card = ({ content, user }) => {
  return (
    <article className="card">
      <Link to={`/posts/${content.slug}`} className="card__link">
        {user !== null ? (
          <div className="card__edit">
            <Link to={`/edit/${content.slug}`}>Edit</Link>
          </div>
        ) : null}
        <img
          src={content.cover_image}
          alt={content.cover_image_alt}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">
            <Link
              to={`/categories/${content.category}`}
              className="card__category"
            >
              {content.category}
            </Link>
            <h3>{content.title}</h3>
          </div>
          <ReactMarkdown source={`${content.body.substring(0, 100)}...`} />
          <div className="card__details">
            <span className="card__date">{content.date_pretty} —&nbsp;</span>
            <span className="card__author">{content.created_by}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

Card.propTypes = {
  content: PropTypes.object.isRequired,
  user: PropTypes.object,
}

export default Card
