import React, { Component } from 'react';
import List from 'components/list/List';
import Switch from 'components/switch/Switch';

let laptops = [
    { brand: "Lenovo", model: "Yoga 3 Pro", price: 2500 },
    { brand: "Sony", model: "Vaio", price: 2000 },
    { brand: "HP", model: "ProBook 450", price: 1500 },
    { brand: "Toshiba", model: "Pavilion", price: 1200 },
    { brand: "Acer", model: "Aspire", price: 800 },
    { brand: "Asus", model: "Transformer Book", price: 500 }
];

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
                <List 
                    items={ laptops }
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