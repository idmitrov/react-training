import React, { Component } from 'react';
import List from 'components/list/List';
import Switch from 'components/switch/Switch';

let laptops = [
    { brand: "Apple", model: "MacBook Pro", price: 3000, type: "new" },
    { brand: "Lenovo", model: "Yoga 3 Pro", price: 2500, type: "new" },
    { brand: "Lenovo", model: "Y570", price: 1000, type: "used" },
    { brand: "Sony", model: "Vaio", price: 1800, type: "used" },
    { brand: "HP", model: "ProBook 450", price: 1500, type: "new" },
    { brand: "Toshiba", model: "Pavilion", price: 1200, type: "new" },
    { brand: "Acer", model: "Aspire", price: 800, type: "new" },
    { brand: "Asus", model: "Transformer Book", price: 500, type: "new" },
    { brand: "Asus", model: "Vivo Book", price: 300, type: "used" }
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