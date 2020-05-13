import React, { useState, useEffect } from 'react'
import firebase from '../../firebase/firebase'
import generateDate from '../../utils/generateDate'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import FormSelect from '../Form/FormSelect'
import useFetchAll from '../../hooks/useFetchAll'

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [coverImageAlt, setCoverImageAlt] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const response = useFetchAll('categories')

  useEffect(() => {
    if (!response.loading) {
      setCategories(response.result)
    }
  }, [response.loading, response.result])

  function handleAddPost(e) {
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
        slug: slug + '-' + Math.ceil(Math.random() * 100),
        cover_image: coverImage,
        cover_image_alt: coverImageAlt,
        created_by: author,
        body,
        category,
      })
      .then(() => {
        alert('Post Submitted!')
        setTitle('')
        setSlug('')
        setCoverImage('')
        setCoverImageAlt('')
        setBody('')
      })
  }

  return (
    <Form handleOnSubmit={handleAddPost}>
      <h2 className="form__title">Add Post</h2>
      <FormInput
        type="text"
        label="Title"
        id="title"
        value={title}
        handleChange={(e) => {
          setTitle(e.target.value)
          setSlug(
            e.target.value
              .toLowerCase()
              .split(/[^A-Za-z\s\d]/)
              .join('')
              .split(' ')
              .join('-')
          )
        }}
      />
      <FormInput
        type="text"
        label="Slug"
        id="slug"
        value={title
          .toLowerCase()
          .split(/[^A-Za-z\s\d]/)
          .join('')
          .split(' ')
          .join('-')}
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
  )
}

export default AddPost
