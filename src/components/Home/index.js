// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoginIn: false}
  onClickButton = () => {
    this.setState(prevState => ({isLoginIn: prevState.isLoginIn}))
  }
  render() {
    const {isLoginIn} = this.state
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoginIn={isLoginIn} />
          {isLoginIn ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
//ccbp submit RJSCP83UDS
