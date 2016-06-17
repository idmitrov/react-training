import React, { Component, PropTypes } from 'react';
import ListItem from 'components/list/ListItem';

export default class List extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return(
            <section 
                items={ this.props.items }
            >
                <h2>List:</h2>
                <ul>
                    { this.renderItems(this.props.items) }
                </ul>
            </section>
        );
    }

    renderItems(items) {
        return items.map((item, index) => <ListItem key={ index } item={ item } />)
    }
}