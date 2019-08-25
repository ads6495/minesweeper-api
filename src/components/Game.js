import React, { Component } from 'react';
import axios from 'axios'
import Cell from './Cell'


class Game extends Component {
  state = {
    board: [],
    currState: '',
    mines: 0,
    id: null,
    win: false,
    lose: false,
    difficulty: null
  }

  newGame = async () => {
    await axios.post(`http://minesweeper-api.herokuapp.com/games`, {
      difficulty: 3

    }).then(res => {
      this.setState({
        board: res.data.board,
        currState: res.data.currState,
        mines: res.data.mines,
        id: res.data.id,
      })
    })

  }

  componentDidMount() {
    this.newGame()
  }

  check = (x, y) => {
    axios.post(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/check`, {
      'row': x,
      'col': y
    })
      .then(res => {
        this.setState({
          board: res.data.board,
          currState: res.data.state,
          mines: res.data.mines
        })
      })
      .then(() => {
        if (this.currState === 'lost') {
          this.setState({
            lost: true
          })
          console.log('You lost dude..')
        } else {
          this.setState({
            win: true
          })
          console.log('you win!')
        }
      })
  }

  flag = (x, y) => {
    axios.post(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`, {
      'row': x,
      'col': y
    })
      .then(res => {
        this.setState({
          board: res.data.board,
          mines: res.data.mines
        })
      })
  }




  render() {
    return (
      <main>
        <h1 className="title">MINESWEEPER</h1>
        <section>
          <table className='cell-table'>
            <tbody>
              {this.state.board.map((col, i) => {
                return (
                  <tr key={i}>
                    {col.map((row, j) => {
                      return (
                        <Cell
                          key={j}
                          display={this.state.board[i][j]}
                          onClick={() => this.check(i, j)}
                          rightClick={() => this.flag(i, j)} />
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

        {/* {this.state.win && !this.state.lose && <Win />} */}
        {/* {this.state.lose && !this.state.win && <Lose />} */}

      </main>

    );
  }
}


export default Game;