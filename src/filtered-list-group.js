import React from 'react';
import Checkbox from './checkbox';
import style from './filtered-list.css';

class FilteredListGroup extends React.Component {

    validateFieldData(data, additional) {
        let output = {
            name: typeof data === 'object' && data.name || data,
            title: typeof data === 'object' && data.title || data
        }
        if (typeof additional === 'object' && additional) {
            output = Object.assign(output, additional);
        }
        return output;
    }

    renderGroupField(field) {
        let data = this.validateFieldData(field, {
            group: this.props.group.name
        });
        return (
            <li key={data.name} className={style.field}>
                <Checkbox
                    label={data.title}
                    value={data}
                    onToggle={this.props.onToggle}
                    checked={this.props.selected.indexOf(data.name) !== -1}
                />
            </li>
        );
    }

    render() {
        return (
            <li className={style.group}>
                <h3 className={style.groupTitle}>
                    {this.props.group.title}
                </h3>
                {this.props.group.limit > 0 &&
                <span className={style.groupLimit}>
                    {'max: '+this.props.group.limit}
                </span>}
                <ul className={style.fields}>
                    {this.props.group.fields.map((field) =>
                        this.renderGroupField(field)
                    )}
                </ul>
            </li>
        );
    }
    
}

FilteredListGroup.propTypes = {
    group: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    })
};

export default FilteredListGroup;