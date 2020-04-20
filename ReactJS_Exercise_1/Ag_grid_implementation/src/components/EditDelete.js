import React, { Component } from 'react'
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiIcon } from '@elastic/eui'

export default class EditDelete extends Component {
    render() {
        return (
            <div>
                <EuiIcon type="trash" onClick={this.props.delete}/>
                <EuiIcon type="pencil" />
            </div>
        )
    }
}
