'use strict'

import React from 'react'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    this.handleInterval = setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.handleInterval)
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  render () {
    return (
      <div>
        Timer: { this.state.time }
      </div>
    )
  }
}

export default Timer
