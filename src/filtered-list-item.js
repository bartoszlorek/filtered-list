import React from 'react';
import style from './filtered-list.css';

class FilteredListItem extends React.Component {

    render() {
        let metaObj = this.props.data.meta,
            meta = [];
        for (let prop in metaObj) {
            let value = metaObj[prop];
            if (value.constructor === Array)
                 meta.push(...value);
            else meta.push(value);
        }
        return (
            <li className={style.item}>
                <h3 className={style.title}>{this.props.data.title}</h3>
                <p className={style.meta}>{meta.join(', ')}</p>
            </li>
        );
    }

}

FilteredListItem.propTypes = {
    data: React.PropTypes.object
};

FilteredListItem.defaultProps = {
    data: {}
};

export default FilteredListItem;