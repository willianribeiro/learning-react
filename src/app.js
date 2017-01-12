'use strict'

import React from 'react'
import Timer from './timer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isTimerVisible: true,
      time: 0
    }
    this.changeProps = this.changeProps.bind(this)
  }

  changeProps () {
    this.setState({ time: this.state.time + 10 })
  }

  render () {
    return (
      <div>
        {
            this.state.isTimerVisible && <Timer time={this.state.time} />
        }
        <button onClick={this.changeProps}>
          Change Props
        </button>
      </div>
    )
  }
}

export default App
