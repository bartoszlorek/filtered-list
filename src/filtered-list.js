import React from 'react';
import FilteredListGroup from './filtered-list-group';
import FilteredListItem from './filtered-list-item';
import style from './filtered-list.css';

class FilteredList extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFields: {},
            searchValue: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onFieldToggle = this.onFieldToggle.bind(this);
    }

    getFilterGroup(name) {
        let filters = this.props.filters;
        for (let i=0; i<filters.length; i++) {
            if (filters[i].name === name) {
                return filters[i];
            }
        }
    }

    onSearchChange(e) {
        this.setState({
            searchValue: e.target.value
        });
    }

    onFieldToggle(field) {
        let selection = {},
            oldGroup = this.state.selectedFields[field.group] || [],
            newGroup =
                  oldGroup.indexOf(field.name) !== -1
                ? oldGroup.filter(fieldName => fieldName !== field.name)
                : [...oldGroup, field.name];

        let limit = this.getFilterGroup(field.group).limit;
        if (limit > 0 && newGroup.length > limit) {
            newGroup.shift();
        }   
        if (newGroup.length > 0) {
            selection[field.group] = newGroup;
        }
        for (let name in this.state.selectedFields) {
            if (name !== field.group) {
                selection[name] = [...this.state.selectedFields[name]];
            }
        }
        this.setState({
            selectedFields: selection
        });
    }

    isFoundBy(text) {
        return text
            .toLowerCase()
            .indexOf(this.state.searchValue
                .toLowerCase()) !== -1;
    }

    isSelected(item) {
        let selected = this.state.selectedFields,
            reducer = this.props.reducer,
            required = 0,
            passed = 0;

        for (let groupName in selected) {
             let currGroup = selected[groupName],
                 itemGroup = reducer(item, groupName);

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
        let visibleItems = this.props.items
            .filter(item => this.isFoundBy(item.title))
            .filter(item => this.isSelected(item));

        return (
            <div className={style.list}>
                <div className={style.banner}>
                    <input
                        type='text'
                        className={style.search}
                        onChange={this.onSearchChange}
                    />
                    <ul className={style.groups}>
                        {this.props.filters.map((group) =>
                            <FilteredListGroup
                                key={group.name}
                                onToggle={this.onFieldToggle}
                                selected={this.state.selectedFields[group.name] || []}
                                group={group}
                            />
                        )}
                    </ul>
                </div>
                <ul className={style.items}>
                    { visibleItems.length > 0
                    ? visibleItems.map(item =>
                        <FilteredListItem
                            key={item.id}
                            data={item}
                        />)
                    : 'No record found.'}
                </ul>
            </div>
        );
    }

}

FilteredList.propTypes = {
    items: React.PropTypes.array.isRequired,
    filters: React.PropTypes.array.isRequired,
    reducer: React.PropTypes.func
};

FilteredList.defaultProps = {
    reducer: (item, groupName) => {
        return item[groupName];
    }
};

export default FilteredList;