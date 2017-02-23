import React from 'react';
import FilteredListGroup from './filtered-list-group';

class FilteredList extends React.Component {

    constructor() {
        super();
        this.state = {
            selection: {},
        }
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(groupName, termName) {
        let newSelection = {},
            oldGroup = this.state.selection[groupName] || [],
            newGroup =
                  oldGroup.indexOf(termName) !== -1
                ? oldGroup.filter(term => term !== termName)
                : [...oldGroup, termName];
                
        if (newGroup.length > 0) {
            newSelection[groupName] = newGroup;
        }
        for (let name in this.state.selection) {
            if (name !== groupName) {
                newSelection[name] = [...this.state.selection[name]];
            }   
        }
        this.setState({
            selection: newSelection
        });
    }

    getItems() {
        return this.props.items.map((item, index) =>
            <li key={index}>{item.title}</li>
        );
    }

    render() {
        return (
            <div>
                <ul className='filtered-list-groups'>
                    {this.props.filters.map((group) =>
                        <FilteredListGroup
                            key={group.name}
                            className='filtered-list-group'
                            onToggle={this.onToggle}
                            group={group}
                        />
                    )}
                </ul>
                <ul className='filtered-list-items'>
                    {this.getItems()}
                </ul>
            </div>
        );
    }
}

export default FilteredList;