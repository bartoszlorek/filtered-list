import React from 'react';

class FilteredListGroupTerm extends React.Component {

    constructor() {
        super();
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        this.props.onToggle(
            this.props.groupName,
            this.props.name
        );
    }

    render() {
        return (
            <li className='filtered-list-group-term'>
                <label>
                    <input
                        onChange={this.handleToggle}
                        type='checkbox'
                    />
                    {this.props.title}
                </label>
            </li>
        );
    }
}

FilteredListGroupTerm.propTypes = {
    groupName: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
};

FilteredListGroupTerm.defaultProps = {
    group: '',
    name: '',
    title: ''
};

export default FilteredListGroupTerm;