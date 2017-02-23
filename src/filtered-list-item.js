import React from 'react';

class FilteredListGroupItem extends React.Component {

    constructor() {
        super();
        this.onFilterToggle = this.onFilterToggle.bind(this);
    }

    onFilterToggle(term, group) {
        // this.state.selection

        console.log(term, group);
    }

    getItems() {
        return this.props.items.map((item, index) =>
            <li key={index}>{item.title}</li>
        );
    }

    render() {
        return (
            <div>
                <FilteredListHeader
                    filters={this.props.filters}
                    onToggle={this.onFilterToggle}
                />
                <ul className='filtered-list-items'>{this.getItems()}</ul>
            </div>
        );
    }
}

export default FilteredListGroupItem;