import React from 'react'

const Toast = ({ type, message }) => {
  return <div className={`toast toast--${type}`}>{message}</div>
}

export default Toast
