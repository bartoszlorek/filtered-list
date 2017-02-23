import React from 'react';
import Checkbox from './checkbox';

class FilteredListGroup extends React.Component {

    parseTermData(term) {
        return {
            name: typeof term === 'object' && term.name || term,
            title: typeof term === 'object' && term.title || term
        }
    }

    renderGroupTerm(term) {
        let data = this.parseTermData(term);
            data.group = this.props.group.name;
        return (
            <li key={data.name} className='filtered-list-group-term'>
                <Checkbox
                    label={data.title}
                    value={data}
                    onToggle={this.props.onToggle}
                />
            </li>
        );
    }

    render() {
        return (
            <li className='filtered-list-group'>
                <h3>{this.props.group.title}</h3>
                <ul className='filtered-list-group-terms'>
                    {this.props.group.terms.map((term) =>
                        this.renderGroupTerm(term)
                    )}
                </ul>
            </li>
        );
    }
}

FilteredListGroup.propTypes = {
    group: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    })
};

export default FilteredListGroup;