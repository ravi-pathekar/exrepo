import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    
        this.inputRef = React.createRef()
    }

    count(){
        this.setState({
            count: ++this.state.count
        })
    }
    
    render() {
        return (
            <div>
                <p ref={this.inputRef}>Count: {this.state.count}</p>
            </div>
        )
    }
}

export default Input
