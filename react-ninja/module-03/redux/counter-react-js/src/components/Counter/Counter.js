import React, { PureComponent } from 'react'

import CounterView from './CounterView'

class Counter extends PureComponent {
  constructor () {
    super()
    this.unsubscribe = null
  }

  increment = () => {
    this.props.store.dispatch({
      type: 'INCREMENT'
    })
  }

  decrement = () => {
    this.props.store.dispatch({
      type: 'DECREMENT'
    })
  }

  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const counter = this.props.store.getState()

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
