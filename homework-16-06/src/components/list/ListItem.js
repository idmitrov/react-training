import React, { Component, PropTypes } from 'react';

export default class ListItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    };

    render() {
        return(
            <li>
                <span>{ this.props.item.model }</span>
                <span> - </span>
                <span>{ this.props.item.price }</span>
            </li>
        );
    }
}