import React from 'react'
import PropTypes from 'prop-types'

function Load({onClick}) {
   return (
   <button onClick={onClick}>Fetch Quote</button>
   )
}

Load.propTypes = {
onClick: PropTypes.func.isRequired
}

export default Load

