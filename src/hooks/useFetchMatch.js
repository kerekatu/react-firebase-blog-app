import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase/firebase'

const useFetchMatch = (collection, slug) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(collection)
      .where('slug', '==', slug)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.size) {
          querySnapshot.forEach(doc => {
            setResult(doc.data())
            setLoading(false)
          })
        }
      })
      .catch(error => {
        console.log(error)
      })

    return () => unsubscribe
  }, [firebase, slug])

  return { result }
}

useFetchMatch.PropTypes = {
  collection: PropTypes.string,
  id: PropTypes.string
}

export default useFetchMatch
