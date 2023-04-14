import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(preState => ({count: preState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayEvenOdd = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <h1 className="count-even-odd">Count is {displayEvenOdd}</h1>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
