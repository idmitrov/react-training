import React, { Component } from 'react';

export default class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    }
  }

  render() {
    return(
      <div 
        style={ this.state.isOn ? {"textAlign": "right", "color": "#0F0"} : {"textAlign": "left", "color": "#F00"} }
        title="switch"
        onClick={this._toggleSwitch} >
        <span>{ this.state.isOn ? "ON" : "OFF" }</span>
      </div>
    );
  }

  _toggleSwitch = () => {
    this.setState({
      isOn: !this.state.isOn 
    });
  }
} 