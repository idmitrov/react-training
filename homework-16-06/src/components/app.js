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
                used: false,
                new: false
            }
        }
    }

    render() {
        return(
            <div>
                <p>Show used laptops only</p>
                <Switch
                    checked={ this.state.switch.used }
                    onToggle={ this.handleUsedSwitch }
                />

                <p>Show new laptops only</p>
                <Switch
                    checked={ this.state.switch.new }
                    onToggle={ this.handleNewSwitch }
                />

                <List 
                    items={ this.generateItems() }
                />
            </div>
        );
    }

    generateItems = () => {
        let filter = {
            showUsed: this.state.switch.used && !this.state.switch.new,
            showNew: !this.state.switch.used && this.state.switch.new
        };

        if (filter.showUsed) {
            return laptops.filter(laptop => laptop.type === "used");
        } else if (filter.showNew) {
            return laptops.filter(laptop => laptop.type === "new");
        }

        // Return All
        return laptops;
    }

    handleNewSwitch = (isChecked) => {
        this.setState({
            switch: {
                new: isChecked,
                used: false
            }
        });
    }

    handleUsedSwitch = (isChecked) => {
        this.setState({
            switch: {
                new: false,
                used: isChecked
            }
        });
    }
}