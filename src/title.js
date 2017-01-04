'use strict'

import React from 'react'

var Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Visitor'
    }
  },

  render: function () {
    return (
      <h1>Hello { this.props.name }!</h1>
    )
  }
})

export default Title
