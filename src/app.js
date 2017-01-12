'use strict'

import React from 'react'
import Timer from './timer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isTimerVisible: true
    }
    this.toggleTimer = this.toggleTimer.bind(this)
  }

  toggleTimer () {
    this.setState({ isTimerVisible: !this.state.isTimerVisible })
  }

  render () {
    return (
      <div>
        {
            this.state.isTimerVisible && <Timer />
        }
        <button onClick={this.toggleTimer}>
          Show/Hide Timer
        </button>
      </div>
    )
  }
}

export default App
