import React from 'react'

const Form = ({ children, handleOnSubmit }) => (
  <form className="form" onSubmit={handleOnSubmit}>
    {children}
  </form>
)

export default Form
