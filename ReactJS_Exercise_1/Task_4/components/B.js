import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class B extends Component {
    render() {
        return (
            <UserConsumer >
                {
                    ({count, handler}) => {
                        return (
                            <>
                                <h1>count: {count}</h1>
                                <button onClick={handler}>Count++</button>
                            </>
                        )
                    } 
                }
                 
            </UserConsumer>
        )
    }
}

export default B
