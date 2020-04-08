import React, { Component } from 'react'

class Time extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             time: new Date().toLocaleTimeString()
        }
    }
    
    currentTime(){
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    componentWillMount(){
        setInterval(() => this.currentTime(), 1000)
    }

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}

export default Time
