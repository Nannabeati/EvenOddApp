// Write your code here
import Component from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementButton = () => {
    const randomNumber = Math.ceil(Math.random()) * 100
    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="background-container">
        <div className="main-container">
          <div>
            <h1 className="heading">Count{count}</h1>
            <div>
              {count % 2 === 0 ? (
                <h1 className="message">Count is Even</h1>
              ) : (
                <h1 className="message">Count is Odd</h1>
              )}
              <button
                type="button"
                className="increment-button"
                onClick={this.incrementButton}
              >
                Increment
              </button>
              <p className="text">
                *Increase By Random Number Between 0 to 100
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
