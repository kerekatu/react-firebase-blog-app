import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase/firebase'

const useFetchAll = (collection, orderBy) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(collection)
      .orderBy('date_formatted', orderBy)
      .onSnapshot(snapshot => {
        try {
          if (snapshot.size) {
            const newData = snapshot.docs.map(doc => doc.data())
            setResult(newData)
            setLoading(false)
          }
        } catch (error) {
          setError(error)
        }
      })

    return () => unsubscribe
  }, [firebase, orderBy])

  return { result, loading, error }
}

useFetchAll.PropTypes = {
  collection: PropTypes.string,
  orderby: PropTypes.string
}

export default useFetchAll
