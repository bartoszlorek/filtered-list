import React from 'react';
import FilteredListGroup from './filtered-list-group';

class FilteredList extends React.Component {

    constructor() {
        super();
        this.state = {
            selection: {}
        }
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(term) {
        let newSelection = {},
            oldGroup = this.state.selection[term.group] || [],
            newGroup =
                  oldGroup.indexOf(term.name) !== -1
                ? oldGroup.filter(item => item !== term.name)
                : [...oldGroup, term.name];
                
        if (newGroup.length > 0) {
            newSelection[term.group] = newGroup;
        }
        for (let name in this.state.selection) {
            if (name !== term.group) {
                newSelection[name] = [...this.state.selection[name]];
            }
        }
        this.setState({
            selection: newSelection
        });
    }

    isSelected(item) {
        let selection = this.state.selection,
            required = 0,
            passed = 0;

        for (let groupName in selection) {
             let currGroup = selection[groupName],
                 itemGroup = item[groupName];

            required += currGroup.length;
            if (typeof itemGroup !== 'undefined') {
                for (let i=0; i<currGroup.length; i++) {
                    if ((itemGroup.constructor === Array &&
                        itemGroup.indexOf(currGroup[i]) !== -1) ||
                        itemGroup === currGroup[i])
                    {
                        passed++;
                    }
                }
            }
            if (passed !== required) {
                return false;
            }
        }
        return true;
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
                    {this.props.items
                        .filter(item => this.isSelected(item))
                        .map(item => <li key={item.id}>{item.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default FilteredList;