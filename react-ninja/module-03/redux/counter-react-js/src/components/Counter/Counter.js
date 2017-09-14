import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import CounterView from './CounterView'

class Counter extends PureComponent {
  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }

  render () {
    const { counter } = this.props

    return (
      <CounterView
        counter={counter}
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
}

const mapStateToProps = state => (
  { counter: state }
)

export default connect(mapStateToProps)(Counter)
