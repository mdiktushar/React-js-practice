import React from 'react'
// import PropTypes from 'prop-types'

const WithClass = props => (
    <div className={props.classes}>
        {props.classes}
    </div>
  )

// WithClass.propTypes = {}

export default WithClass