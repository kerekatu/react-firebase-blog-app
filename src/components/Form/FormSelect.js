import React from 'react'
import PropTypes from 'prop-types'

const FormSelect = ({ selectedValue, values, handleChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="form__select"
    >
      {values.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  )
}

FormSelect.propTypes = {
  value: PropTypes.any,
  values: PropTypes.array,
  handleOnChange: PropTypes.func,
}

export default FormSelect
