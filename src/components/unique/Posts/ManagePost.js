import React, { useState } from 'react'
import firebase from '../../../firebase/firebase'
import generateDate from '../../../helpers/generateDate'
import useFetchAll from '../../../hooks/useFetchAll'
import useFetchMatch from '../../../hooks/useFetchMatch'

const ManagePost = props => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [coverImageAlt, setCoverImageAlt] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [selectPost, setSelectPost] = useState('react-components')
  const response = useFetchAll('posts', 'desc')
  const responseMatch = useFetchMatch('posts', selectPost)

  if (!response.result || !responseMatch.result) {
    return null
  }

  function handleCreatePost(e) {
    e.preventDefault()
    const author = 'Admin'
    const date = generateDate()

    firebase
      .firestore()
      .collection('posts')
      .add({
        title,
        date_formatted: date.formatted,
        date_pretty: date.pretty,
        slug,
        cover_image: coverImage,
        cover_image_alt: coverImageAlt,
        created_by: author,
        body,
        category
      })

    alert('Post Submitted!')
    setTitle('')
    setSlug('')
    setCoverImage('')
    setCoverImageAlt('')
    setBody('')
  }

  function handleEditPost(e) {
    e.preventDefault()
    const author = 'Admin'
    const date = generateDate()

    firebase
      .firestore()
      .collection('posts')
      .where('slug', '==', selectPost)
      .update({
        title,
        date_formatted: date.formatted,
        date_pretty: date.pretty,
        slug,
        cover_image: coverImage,
        cover_image_alt: coverImageAlt,
        created_by: author,
        body,
        category
      })
  }

  const jsxEdit = (
    <>
      <h2>Edit Post</h2>
      <div className="manage__content">
        <select
          className="manage__select"
          value={selectPost}
          onChange={e => setSelectPost(e.target.value)}
        >
          {response.result.map(post => (
            <option value={post.slug} key={post.slug}>
              {post.slug}
            </option>
          ))}
        </select>
        <form className="manage__form" onSubmit={handleEditPost}>
          <label htmlFor="title-field" className="manage__label">
            Title:
          </label>
          <input
            type="text"
            id="title-field"
            className="manage__input"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor="slug-field" className="manage__label">
            Slug:
          </label>
          <input
            type="text"
            id="slug-field"
            className="manage__input"
            value={responseMatch.result.slug}
            onChange={e => setSlug(e.target.value)}
            disabled
          />
          <label htmlFor="cover-img-field" className="manage__label">
            Cover Image (Direct URL):
          </label>
          <input
            type="text"
            id="cover-img-field"
            className="manage__input"
            value={coverImage}
            onChange={e => setCoverImage(e.target.value)}
          />
          <label htmlFor="cover-img-alt-field" className="manage__label">
            Cover Image Alt:
          </label>
          <input
            type="text"
            id="cover-img-alt-field"
            className="manage__input"
            value={coverImageAlt}
            onChange={e => setCoverImageAlt(e.target.value)}
          />
          <label htmlFor="body-field" className="manage__label">
            Content:
          </label>
          <textarea
            type="text"
            id="body-field"
            className="manage__input"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="manage__select"
          >
            <option value="disabled">Select Category</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="Sass">Sass</option>
            <option value="Design">Design</option>
          </select>
          <button className="manage__submit">Submit</button>
        </form>
      </div>
    </>
  )

  const jsxAdd = (
    <>
      <h2>Add Post</h2>
      <div className="manage__content">
        <form className="manage__form" onSubmit={handleCreatePost}>
          <label htmlFor="title-field" className="manage__label">
            Title:
          </label>
          <input
            type="text"
            id="title-field"
            className="manage__input"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor="slug-field" className="manage__label">
            Slug:
          </label>
          <input
            type="text"
            id="slug-field"
            className="manage__input"
            value={slug}
            onChange={e => setSlug(e.target.value)}
          />
          <label htmlFor="cover-img-field" className="manage__label">
            Cover Image (Direct URL):
          </label>
          <input
            type="text"
            id="cover-img-field"
            className="manage__input"
            value={coverImage}
            onChange={e => setCoverImage(e.target.value)}
          />
          <label htmlFor="cover-img-alt-field" className="manage__label">
            Cover Image Alt:
          </label>
          <input
            type="text"
            id="cover-img-alt-field"
            className="manage__input"
            value={coverImageAlt}
            onChange={e => setCoverImageAlt(e.target.value)}
          />
          <label htmlFor="body-field" className="manage__label">
            Content:
          </label>
          <textarea
            type="text"
            id="body-field"
            className="manage__input"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="manage__select"
          >
            <option value="none">Select Category</option>
            <option value="react">React</option>
            <option value="css">CSS</option>
            <option value="sass">Sass</option>
            <option value="design">Design</option>
          </select>
          <button className="manage__submit">Submit</button>
        </form>
      </div>
    </>
  )

  return (
    <main className="manage">
      {props.match.path === '/edit' ? jsxEdit : jsxAdd}
    </main>
  )
}

export default ManagePost
