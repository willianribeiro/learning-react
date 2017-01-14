'use strict'

import React from 'react'

class Timer extends React.Component {
  // Executa quando o componente é instanciado.
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  // Executa antes do componente ser montado.
  // Significa que este método é executado antes
  // do elemento ser adicionado ao DOM real.
  // (Ele pode ser executado no server side)
  componentWillMount () {

  }

  // Este método é executado quando o componente
  // já foi adicionado ao DOM real
  componentDidMount () {
    this.handleInterval = setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000)
  }

  // Executa antes do componente ser removido do DOM
  componentWillUnmount () {
    clearInterval(this.handleInterval)
  }

  // O React percebe que o objeto props foi modificado e
  // antes de efetuar a modificacao ele executa este método
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  // Este método é executado antes do componente ser renderizado novamente
  // pela chamada do método render().
  // Este método recebe por parâmetro o próximo objeto props e o próximo objeto
  // state e retorna true ou false, sendo que, true significa que o método
  // render() será executado e false significa que não será executado.
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true
  }

  // Este método é o último método executado antes de renderizar o
  // componente novamente
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState)
  }

  // Este método é chamado toda vez que há alguma alteração no state ou
  // no props do componente
  render () {
    console.log('render')
    return (
      <div>
        Timer: { this.state.time }
      </div>
    )
  }
}

export default Timer
