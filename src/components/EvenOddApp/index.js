import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({value: prevState.value + randomNumber}))
  }

  render() {
    const {value} = this.state
    const type = value % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="heading">Count {value}</h1>
          <p className="about-count">Count is {type}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
