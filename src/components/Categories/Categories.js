import React from 'react'
import { Link } from 'react-router-dom'
import useFetchAll from '../../hooks/useFetchAll'

const Categories = () => {
  const response = useFetchAll('categories')

  if (response.loading) {
    return null
  }

  return (
    <section className="categories">
      <div className="categories__title">
        <h2>Categories</h2>
      </div>
      <div className="categories__container">
        {response.result.map((category, index) => (
          <Link
            to={`/categories/${category.category}`}
            className="btn-primary btn-primary--small bold"
            key={index}
          >
            {category.category}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
