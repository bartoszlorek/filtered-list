import React from 'react';
import { render } from 'react-dom';
import { filters, items } from './data';
import FilteredList from './fl';

render(
    <FilteredList
        filters={filters}
        items={items}
        reducer={(item, groupName) => {
            return item.meta[groupName];
        }}
    />,
    document.getElementById('app')
);