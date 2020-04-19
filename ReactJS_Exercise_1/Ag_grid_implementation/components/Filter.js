import React, { Component } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export default class Filter extends Component {

    render() {
      const { onFilterTextBoxChanged } = this.props
        return (        
                <input className="my-2 p-2" 
                       type="text" 
                       id="filter-text-box" 
                       placeholder="Filter..." 
                       onInput={onFilterTextBoxChanged}
                />
        )
    }
}