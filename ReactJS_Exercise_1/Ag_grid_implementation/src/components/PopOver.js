import React, { Component } from 'react'
import {
    EuiPopover,
    EuiSpacer,
    EuiButtonToggle
  } from '@elastic/eui'
  

export default class PopOver extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isPopoverOpen: false,
        isFirstName: true,
        isLastName: true,
        isEmail: true,
      }
    }

    onButtonClick = () => {
      this.setState({
        isPopoverOpen: !this.state.isPopoverOpen
      })
    } 

    closePopover = () => {
      this.setState({
        isPopoverOpen: false,
      }) 
    }

    changeState = (e, demo) => {
      this.temp = e.target.checked
      this.setState({
        [demo]: !this.temp
      })
    }
    
    render() {
      const { showHideColumn } = this.props
        return (
            <EuiPopover 
                   button={<EuiButtonToggle label=""
                                            iconType="gear" 
                                            onChange={this.onButtonClick}                                   
                                            isEmpty                                        
                                            >
                            </EuiButtonToggle>}
                            isOpen={this.state.isPopoverOpen}
                            closePopover={this.closePopover}
                            style ={{ float: 'right' }}
                            >
                  <EuiButtonToggle
                    label="First Name"
                    iconType={ this.state.isFirstName? 'eye' : 'eyeClosed'}
                    onChange={(e)=>{showHideColumn(e, 'firstName');
                                      this.changeState(e, 'isFirstName')}}
                    isEmpty
                  />
                  <EuiSpacer size='s'/> 
                  <EuiButtonToggle
                    label="Last Name"
                    iconType={ this.state.isLastName ? 'eye' : 'eyeClosed'}
                    onChange={(e) => {showHideColumn(e, 'lastName')
                                      this.changeState(e, 'isLastName')}}
                    isEmpty
                  />
                  <EuiSpacer size='s'/>
                  <EuiButtonToggle
                    label="Email"
                    iconType={ this.state.isEmail ? 'eye' : 'eyeClosed'}
                    onChange={(e) => {showHideColumn(e, 'email')
                                     this.changeState(e, 'isEmail')}}
                    isEmpty
                  />
                  
                </EuiPopover>
        )
    }
}