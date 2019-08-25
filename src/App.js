import React, { Component } from 'react'
import Game from './components/Game'
import Cell from './components/Cell'
import Win from './components/Win'
import Lose from './components/Lose'

class App extends Component {
  render() {
    return (
      <section>
        <Game />
        <Cell />
        <Win />
        <Lose />
      </section>
    )
  }
}

export default App