// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h>
          Speed is<span> {speed}</span>mph
        </h>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="btn1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
