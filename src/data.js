const filters = [
    {
        name: 'type',
        title: 'Type',
        limit: 0,
        fields: [
            { name: 'keypunch', title: 'Keypunch' },
            { name: 'sorter', title: 'Sorter' },
            { name: 'collator', title: 'Collator' },
            { name: 'reproducing', title: 'Reproducing Punch' },
            { name: 'interpreter', title: 'Interpreter' },
            { name: 'tabulator', title: 'Tabulator' },
            { name: 'calculator', title: 'Calculator' }
        ]
    },
    {
        name: 'series',
        title: 'Series',
        limit: 1,
        fields: [
            { name: 20, title: 'IBM 20' },
            { name: 30, title: 'IBM 30' },
            { name: 50, title: 'IBM 50' },
            { name: 400, title: 'IBM 400' },
            { name: 500, title: 'IBM 500' },
            { name: 600, title: 'IBM 600' }
        ]
    },
    {
        name: 'year',
        title: 'Year',
        limit: 1,
        fields: [ 1933, 1949, 1956 ]
    }
];

const items = [
    {
        id: 0,
        title: 'IBM 031: Alphabetic Duplicating Key Punch',
        meta: {
            type: ['keypunch', 'sorter', 'reproducing'],
            series: 30,
            year: 1933
        }
    },
    {
        id: 1,
        title: 'IBM 032: Alphabetic Printing Key Punch',
        meta: {
            type: 'keypunch',
            series: 30,
            year: 1933
        }
    },
    {
        id: 2,
        title: 'IBM 034: Alphabetic Duplicating Printing Key Punch',
        meta: {
            type: ['keypunch', 'collator'],
            series: 30,
            year: 1933
        }
    },
    {
        id: 3,
        title: 'IBM 401: Tabulator',
        meta: {
            type: ['tabulator'],
            series: 400,
            year: 1933
        }
    },
    {
        id: 4,
        title: 'IBM 601: Automatic Cross-Footing Multiplying Punch',
        meta: {
            type: ['tabulator', 'interpreter'],
            series: 600,
            year: 1933
        }
    },
    {
        id: 5,
        title: 'IBM 056: Card Verifier',
        meta: {
            type: 'keypunch',
            series: 50,
            year: 1949
        }
    },
    {
        id: 6,
        title: 'IBM 520: Computing Punch',
        meta: {
            type: ['reproducing', 'collator'],
            series: 500,
            year: 1949
        }
    },
    {
        id: 7,
        title: 'IBM 522: Duplicating Summary Punch',
        meta: {
            type: 'reproducing',
            series: 500,
            year: 1949
        }
    },
    {
        id: 8,
        title: 'IBM 523: Gang Summary Punch',
        meta: {
            type: 'reproducing',
            series: 500,
            year: 1949
        }
    },
    {
        id: 9,
        title: 'IBM 605: Electronic Calculator',
        meta: {
            type: 'calculator',
            series: 600,
            year: 1949
        }
    },
    {
        id: 10,
        title: 'IBM CPC: Card Programmed Electronic Calculator',
        meta: {
            type: ['calculator', 'interpreter'],
            series: 'cpc',
            year: 1949
        }
    },
    {
        id: 11,
        title: 'IBM 027: Card Proof Punch',
        meta: {
            type: ['keypunch', 'tabulator', 'sorter'],
            series: 20,
            year: 1956
        }
    },
    {
        id: 12,
        title: 'IBM 028: Printing Card Proof Punch',
        meta: {
            type: ['keypunch', 'reproducing'],
            series: 20,
            year: 1956
        }
    }
];

export { filters, items };