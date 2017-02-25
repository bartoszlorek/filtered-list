import React from 'react';
import FilteredListFilter from './fl-filter';
import FilteredListItem from './fl-item';
import style from './fl.css';

class FilteredList extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFilters: {},
            searchValue: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onFilterToggle = this.onFilterToggle.bind(this);
    }

    getFilter(name) {
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

    onFilterToggle(field) {
        let selection = {},
            oldFilter = this.state.selectedFilters[field.filter] || [],
            newFilter =
                  oldFilter.indexOf(field.name) !== -1
                ? oldFilter.filter(fieldName => fieldName !== field.name)
                : [...oldFilter, field.name];

        let limit = this.getFilter(field.filter).limit;
        if (limit > 0 && newFilter.length > limit) {
            newFilter.shift();
        }   
        if (newFilter.length > 0) {
            selection[field.filter] = newFilter;
        }
        for (let name in this.state.selectedFilters) {
            if (name !== field.filter) {
                selection[name] = [...this.state.selectedFilters[name]];
            }
        }
        this.setState({
            selectedFilters: selection
        });
    }

    isFoundBy(text) {
        return text
            .toLowerCase()
            .indexOf(this.state.searchValue
                .toLowerCase()) !== -1;
    }

    isSelected(item) {
        let selected = this.state.selectedFilters,
            reducer = this.props.reducer,
            required = 0,
            passed = 0;

        for (let filterName in selected) {
             let fields = selected[filterName],
                 filter = reducer(item, filterName);

            required += fields.length;
            if (typeof filter !== 'undefined') {
                for (let i=0; i<fields.length; i++) {
                    if ((filter.constructor === Array &&
                        filter.indexOf(fields[i]) !== -1) ||
                        filter === fields[i])
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
                    <ul className={style.filters}>
                        {this.props.filters.map((filter) =>
                            <FilteredListFilter
                                key={filter.name}
                                onToggle={this.onFilterToggle}
                                selected={this.state.selectedFilters[filter.name] || []}
                                filter={filter}
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
    filters: React.PropTypes.array.isRequired,
    items: React.PropTypes.array.isRequired,
    reducer: React.PropTypes.func
};

FilteredList.defaultProps = {
    reducer: (item, filterName) => {
        return item[filterName];
    }
};

export default FilteredList;