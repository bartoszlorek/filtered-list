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
                />
                {this.props.label}
            </label>
        );
    }
}

Checkbox.defaultProps = {
    label: '',
    value: ''
};

export default Checkbox;