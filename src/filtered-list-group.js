import React from 'react';
import FilteredListGroupTerm from './filtered-list-group-term';

class FilteredListGroup extends React.Component {

    parseTermData(term) {
        let name = typeof term === 'object' && term.name || term,
            title = typeof term === 'object' && term.title || term;
        return {
            name: name.toString(),
            title: title.toString()
        }
    }

    renderGroupTerm(term) {
        let data = this.parseTermData(term);
        return (
            <FilteredListGroupTerm
                key={data.name}
                onToggle={this.props.onToggle}
                groupName={this.props.group.name}
                name={data.name}
                title={data.title}
            />
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