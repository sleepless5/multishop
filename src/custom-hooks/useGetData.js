import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const useGetData = (collectionName) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const collectionRef = collection(db, collectionName)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map(doc => (
          {
            ...doc.data(),
            id: doc.id
          }
        )))
      })
      setLoading(false)
    }
    getData()
  }, [])
  return {
    data, loading
  }


}

export default useGetData