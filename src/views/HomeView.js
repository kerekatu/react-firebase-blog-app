import React from 'react'
import Posts from '../components/Posts/Posts'
import Categories from '../components/Categories/Categories'

const HomeView = (props) => (
  <main className="home container">
    <Posts {...props} />
    <Categories />
  </main>
)

export default HomeView
