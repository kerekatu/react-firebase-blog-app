import React from 'react'
import Toast from '../components/shared/Toast'

const useToast = ({ type, message }) => {
  return <Toast type={type} message={message} />
}

export default useToast
