# filtered-list

### Simplified Component Structure

```
list
    banner
        search
        groups
            group
                group-field
                group-field
            group
                group-field
                group-field
    items
        item
        item
        item
        item

```

## Usage

```
<FilteredList items filters [, reducer] />
```

items `[Array.isRequired]` **Important**: `id` must be unique!

```
[
    {
        id: 0,
        title: 'Hello World!',
        meta: {
            type: ['assign', 'multiple', 'fields'],
            location: 'string',
            year: 2017,
            ...
        }
    },
    ...
]
```

filters `[Array.isRequired]` **Important**: `name` must be unique string value!

```
[
    {
        name: 'type',
        title: 'Type',
        limit: 0,
        fields: [
            { name: 'assign', title: 'Assign Type' },
            ...
        ]
    },
    ...
]
```

reducer `[Function]` **Note**: `reducer` is optional. By default component is looking for filter group as `item` object's direct properties. To change this behavior use `reducer`.

```
(item, groupName) => item.deeper.filters[groupName]
```
