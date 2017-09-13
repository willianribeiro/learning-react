import React, { PureComponent } from 'react'

import CounterView from './CounterView'

class Counter extends PureComponent {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render () {
    const { counter } = this.state

    return (
      <CounterView
        counter={counter}
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
}

export default Counter
