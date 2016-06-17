import React, { Component } from 'react';
import Switch from 'components/switch/Switch';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: {
                checked: false
            }
        }
    }

    render() {
        return(
            <div>
                <Switch
                    checked={ this.state.switch.checked }
                    onToggle={ this.handleSwitch }
                />
            </div>
        );
    }

    handleSwitch = (isChecked) => {
        this.setState({
            switch: {
                checked: isChecked 
            }
        });
    }
}