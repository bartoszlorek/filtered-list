import React from 'react';

class Checkbox extends React.Component {

    constructor() {
        super();
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        this.props.onToggle(
            this.props.value,
            e.target.checked
        );
    }

    render() {
        return (
            <label>
                <input
                    type='checkbox'
                    onChange={this.handleToggle}
                    checked={this.props.checked}
                />
                {this.props.label}
            </label>
        );
    }
}

Checkbox.propTypes = {
    checked: React.PropTypes.bool,
    onToggle: React.PropTypes.func
};

Checkbox.defaultProps = {
    label: '',
    value: '',
    checked: false
};

export default Checkbox;