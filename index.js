// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculators extends Component {
  state = {count: ''}

  phrase = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="calculate_container">
          <h1 className="head">Calculate the Letters you Enter</h1>
          <label htmlFor="phrase" className="quote">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            id="letter"
            onChange={this.phrase}
            className="input"
          />
          <p type="button" className="count">
            No.of letters: {count.length}
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculators

