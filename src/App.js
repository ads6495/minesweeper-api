import React, { Component } from 'react'
import Game from './components/Game'
import Cell from './components/Cell'

class App extends Component {
  render() {
    return (
      <section>
        <Game />
        <Cell />
      </section>
    )
  }
}

export default App