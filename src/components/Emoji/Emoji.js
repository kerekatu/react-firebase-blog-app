import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
)

Emoji.proptypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default Emoji
