import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase/firebase'

const useFetchAll = (collection, orderBy = null) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    const subscribe = () => {
      if (orderBy !== null) {
        firebase
          .firestore()
          .collection(collection)
          .orderBy(orderBy.field, orderBy.order)
          .onSnapshot((snapshot) => {
            try {
              if (snapshot.size && mounted) {
                const newData = snapshot.docs.map((doc) => doc.data())
                setResult(newData)
                setLoading(false)
              }
            } catch (e) {
              setError('Error: ' + e)
            }
          })
      } else {
        firebase
          .firestore()
          .collection(collection)
          .onSnapshot((snapshot) => {
            try {
              if (snapshot.size && mounted) {
                const newData = snapshot.docs.map((doc) => doc.data())
                setResult(newData)
                setLoading(false)
              }
            } catch (e) {
              setError('Error: ' + e)
            }
          })
      }
    }
    subscribe()

    return () => {
      mounted = false
    }
  }, [collection, orderBy])

  return { result, loading, error }
}

useFetchAll.propTypes = {
  collection: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
}

export default useFetchAll
