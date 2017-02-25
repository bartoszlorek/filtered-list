const items = [
    {
        id: 0,
        title: 'Transmission controller',
        meta: {
            type: ['concert', 'standup'],
            location: '1a',
            year: 2016
        }
    },
    {
        id: 1,
        title: 'Terminal Control Unit',
        meta: {
            type: 'exhibition',
            location: '1a',
            year: 2015
        }
    },
    {
        id: 2,
        title: 'Retail Store System',
        meta: {
            type: ['show', 'concert', 'standup'],
            location: '1b',
            year: 2014
        }
    },
    {
        id: 3,
        title: 'SureMark Retail Printer',
        meta: {
            type: 'standup',
            location: '1a'
        }
    },
    {
        id: 4,
        title: 'Plant Communications System',
        meta: {
            type: ['exhibition', 'debate'],
            location: '1a',
            year: 2015
        }
    },
    {
        id: 5,
        title: 'PC Based Retail System',
        meta: {
            type: 'show',
            location: '1b',
            year: 2016
        }
    },
    {
        id: 6,
        title: 'Badge Punch',
        meta: {
            type: ['debate', 'metting'],
            location: '1b'
        }
    },
    {
        id: 7,
        title: 'Radiation-hardened single board computer',
        meta: {
            type: 'exhibition',
            location: '1a',
            year: 2015
        }
    },
    {
        id: 8,
        title: 'Read-Out Clock',
        meta: {
            type: 'exhibition',
            location: '1b',
            year: 2014
        }
    }
];

const filters = [
    {
        name: 'type',
        title: 'Type',
        limit: 0,
        fields: [
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
        fields: [
            { name: '1a', title: 'Building 1a' },
            { name: '1b', title: 'Building 1b' }
        ]
    },
    {
        name: 'year',
        title: 'Year',
        limit: 1,
        fields: [ 2014, 2015, 2016 ]
    }
];

export { items, filters };