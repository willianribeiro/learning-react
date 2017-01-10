'use strict'

import React from 'react'

const Square = (props) => (
  <div style={{
    backgroundColor: props.color,
    width: '100px',
    height: '100px'
  }} />
)

Square.defaultProps = {
  color: 'gray'
}

export default Square
