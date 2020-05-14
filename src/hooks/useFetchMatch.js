import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase/firebase'

const useFetchMatch = (collection, prop, slug) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(collection)
      .where(prop, '==', slug)
      .get()
      .then((snapshot) => {
        if (snapshot.size) {
          const tempDoc = []
          snapshot.forEach((doc) => {
            tempDoc.push(doc.data())
            setResult(tempDoc)
            setLoading(false)
          })
        }
      })
      .catch((e) => {
        setError('Error: ' + e)
      })

    return () => unsubscribe
  }, [collection, prop, slug])

  return { result, loading, error }
}

useFetchMatch.propTypes = {
  collection: PropTypes.string.isRequired,
  prop: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default useFetchMatch
