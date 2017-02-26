# filtered-list

[demo](http://bartoszlorek.pl/run/filtered-list/)

### Simplified Component Structure
Each filter is a group of fields.

```
fl
    banner
        search
        filters
            filter
                field
                field
            filter
                field
                field
    items
        item
        item
        item
        item

```

## Usage

```
<FilteredList filters items [, reducer] />
```

filters `[Array.isRequired]` **Important**: `name` must be unique string value!

```
[
    {
        name: 'type',
        title: 'Type',
        limit: 0,
        fields: [
            { name: 'fieldA', title: 'Field A' },
            { name: 'fieldB', title: 'Field B' },
            ...
        ]
    },
    ...
]
```

items `[Array.isRequired]`

```
[
    {
        // required and unique
        id: 0,

        // additional
        title: 'Hello World!',

        // filters
        type: ['fieldA', 'fieldB', 'fieldC'],
        location: 'fieldD',
        year: 2017,
        ...
    },
    ...
]
```

reducer `[Function]` **Note**: `reducer` is optional. By default component is looking for filters as `item` object's direct properties. To change this behavior use `reducer`.

```
(item, filterName) => item.deeper.filters[filterName]
```

## To Do

- Order by filter
- Sub-filters - select whole group or single field
