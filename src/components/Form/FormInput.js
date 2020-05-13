import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({
  form = 'input',
  type = 'text',
  label,
  id,
  name,
  value,
  handleChange,
  disabled,
}) => (
  <div className="form__field">
    <label htmlFor={`${id}-field`} className="form__label">
      {label + ':'}
    </label>
    {form === 'textarea' ? (
      <textarea
        type={type}
        id={`${id}-field`}
        name={name !== null && name}
        className="form__input"
        value={value}
        onChange={handleChange}
        disabled={disabled !== null && disabled}
        rows="4"
      />
    ) : (
      <input
        type={type}
        id={`${id}-field`}
        name={name !== null && name}
        className="form__input"
        value={value}
        onChange={handleChange}
        disabled={disabled !== null && disabled}
      />
    )}
  </div>
)

FormInput.propTypes = {
  form: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
}

export default FormInput
