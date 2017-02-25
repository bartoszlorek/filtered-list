import React from 'react';
import Checkbox from './checkbox';
import style from './fl.css';

class FilteredListFilter extends React.Component {

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

    renderField(field) {
        let data = this.validateFieldData(field, {
            filter: this.props.filter.name
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
            <li className={style.filter}>
                <h3 className={style.filterTitle}>
                    {this.props.filter.title}
                </h3>
                {this.props.filter.limit > 0 &&
                <span className={style.filterLimit}>
                    {'max: '+this.props.filter.limit}
                </span>}
                <ul className={style.fields}>
                    {this.props.filter.fields.map((field) =>
                        this.renderField(field)
                    )}
                </ul>
            </li>
        );
    }
    
}

FilteredListFilter.propTypes = {
    filter: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    })
};

export default FilteredListFilter;