'use strict'

import React from 'react'
import Square from './square'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      color: 'purple'
    }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color} />
      </div>
    )
  }
}

export default App
