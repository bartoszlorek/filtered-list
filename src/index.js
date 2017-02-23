import React from 'react';
import { render } from 'react-dom';
import FilteredList from './filtered-list';

const items = [
    {
        id: 0,
        title: 'Bring Your Own',
        type: ['concert', 'standup'],
        location: '1a',
    },
    {
        id: 1,
        title: 'The Hidden Photo',
        type: 'exhibition',
        location: '1a',
        year: 2015
    },
    {
        id: 2,
        title: 'The Lion King',
        type: 'show',
        location: '1b',
        year: 2016
    }
];

const filters = [
    {
        name: 'type',
        title: 'Type',
        limit: 0,
        terms: [
            { name: 'concert', title: 'Concert' },
            { name: 'metting', title: 'Metting' },
            { name: 'standup', title: 'Stand-up' },
            { name: 'exhibition', title: 'Exhibition' },
            { name: 'debate', title: 'Debate' },
            { name: 'show', title: 'Show' }
        ]
    },
    {
        name: 'location',
        title: 'Location',
        limit: 1,
        terms: [
            { name: '1a', title: 'Building 1a' },
            { name: '1b', title: 'Building 1b' }
        ]
    },
    {
        name: 'year',
        title: 'Year',
        limit: 1,
        terms: [ 2014, 2015, 2016 ]
    }
];

render(
    <FilteredList
        items={items}
        filters={filters}
    />,
    document.getElementById('app')
);
