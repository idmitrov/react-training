import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import SwitchStyles from 'components/switch/switchStyles.scss';

export default class Switch extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        checked: PropTypes.bool,
        onToggle: PropTypes.func.isRequired
    }

    render() {
        let buttonClassName = classnames(SwitchStyles.button, { [SwitchStyles.checked]: this.props.checked });

        return(
            <div className={ SwitchStyles.switch } >
                <div className={ SwitchStyles.buttonWrapper } >
                    <span className={ buttonClassName } onClick={ this._toggleSwitch } ></span>
                </div>
            </div>
        );
    }

    _toggleSwitch = () => {
        this.props.onToggle(!this.props.checked);
    }
}