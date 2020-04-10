import React, { Component } from 'react'
import './App.css'
import './AppStyle.css'
import A from './components/A'
import { UserProvider } from './components/userContext'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  handler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  
  render() {
    const cv = {
      count: this.state.count,
      handler: this.handler}
    return (
      <div className="App">
        <UserProvider value={cv} >
          <A />
        </UserProvider>
      </div>
    )
  }
}

export default App