import React from 'react';
import { render } from 'react-dom';
import { items, filters } from './data';
import FilteredList from './filtered-list';

render(
    <FilteredList
        items={items}
        filters={filters}
        reducer={(item, groupName) => {
            return item.meta[groupName];
        }}
    />,
    document.getElementById('app')
);