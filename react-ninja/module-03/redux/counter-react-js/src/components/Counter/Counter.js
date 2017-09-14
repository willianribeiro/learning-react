import React, { PureComponent } from 'react'

import CounterView from './CounterView'
import { createStore } from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

const store = createStore(reducer)

class Counter extends PureComponent {
  increment = () => {
    store.dispatch({
      type: 'INCREMENT'
    })
  }

  decrement = () => {
    store.dispatch({
      type: 'DECREMENT'
    })
  }

  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  render () {
    const counter = store.getState()

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
