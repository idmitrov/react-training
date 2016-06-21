import React, { Component, PropTypes } from 'react';
import ListStyles from 'components/list/ListStyles.scss';

export default class ListItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    };

    static defaultValues = {
        defaultImage: "https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97300&w=300&h=300"
    }

    render() {
        return(
            <li className={ ListStyles.listItem }>
                <div className={ ListStyles.itemHeader }>
                    <h3 
                        className={ ListStyles.itemTitle }>{ this.props.item.model } 
                        <span 
                            className={ ListStyles.label } 
                            >
                            { this.props.item.type } 
                        </span>
                    </h3>
                    <div 
                        className={ ListStyles.itemPreview }>
                        <img src={ ListItem.defaultValues.defaultImage } />
                    </div>
                </div>
                <div 
                    className={ ListStyles.itemFooter } 
                    >
                    <strong 
                        className={ ListStyles.itemPrice }
                        >
                        { this.props.item.price }BGN
                    </strong>
                </div>
            </li>
        );
    }
}