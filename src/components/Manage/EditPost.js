import React, { useState, useEffect } from 'react'
import firebase from '../../firebase/firebase'
import generateDate from '../../utils/generateDate'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import FormSelect from '../Form/FormSelect'
import useFetchMatch from '../../hooks/useFetchMatch'
import useFetchAll from '../../hooks/useFetchAll'

const EditPost = ({ match }) => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [coverImageAlt, setCoverImageAlt] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const matchParams = match.params.slug
  const responseMatch = useFetchMatch('posts', 'slug', matchParams)
  const response = useFetchAll('categories')

  useEffect(() => {
    if (!responseMatch.loading && !response.loading) {
      setTitle(responseMatch.result[0].title)
      setSlug(responseMatch.result[0].slug)
      setCoverImage(responseMatch.result[0].cover_image)
      setCoverImageAlt(responseMatch.result[0].cover_image_alt)
      setBody(responseMatch.result[0].body)
      setCategory(responseMatch.result[0].category)
      setCategories(response.result)
    }
  }, [
    responseMatch.loading,
    responseMatch.result,
    response.loading,
    response.result,
  ])

  function handleEditPost(e) {
    e.preventDefault()
    const author = 'Admin'
    const date = generateDate()
    const db = firebase.firestore().collection('posts')

    db.where('slug', '==', matchParams)
      .get()
      .then((response) => {
        response.docs.forEach((doc) => {
          db.doc(doc.id).update({
            title,
            date_formatted: date.formatted,
            date_pretty: date.pretty,
            slug,
            cover_image: coverImage,
            cover_image_alt: coverImageAlt,
            created_by: author,
            body,
            category,
          })
        })
      })
  }

  function handleDeletePost(e) {
    e.preventDefault()
    const db = firebase.firestore().collection('posts')

    db.where('slug', '==', matchParams)
      .get()
      .then((response) => {
        response.docs.forEach((doc) => {
          db.doc(doc.id).delete()
        })
      })
  }

  return (
    <>
      <Form handleOnSubmit={handleEditPost}>
        <FormInput
          type="text"
          label="Title"
          id="title"
          value={title}
          handleChange={(e) => setTitle(e.target.value)}
        />
        <FormInput
          type="text"
          label="Slug"
          id="slug"
          value={slug}
          handleChange={(e) => setSlug(e.target.value)}
          disabled={true}
        />
        <FormInput
          type="text"
          label="Cover Image"
          id="cover-image"
          value={coverImage}
          handleChange={(e) => setCoverImage(e.target.value)}
        />
        <FormInput
          type="text"
          label="Cover Image Alt"
          id="cover-image-alt"
          value={coverImageAlt}
          handleChange={(e) => setCoverImageAlt(e.target.value)}
        />
        <FormInput
          form="textarea"
          type="text"
          label="Body"
          id="body"
          value={body}
          handleChange={(e) => setBody(e.target.value)}
        />
        <FormSelect
          selectedValue={category}
          values={categories.map((category) => category.category)}
          handleChange={(e) => setCategory(e.target.value)}
        />
        <button className="form__submit">Submit</button>
      </Form>
      <Form handleOnSubmit={handleDeletePost}>
        <button className="form__submit bg-error">Delete Post</button>
      </Form>
    </>
  )
}

export default EditPost
