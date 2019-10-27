import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    } 

    
    deleteItem () {
        const { handleDelete, index } = this.props;
        handleDelete(index);
    }

    render () {
        const { item, test } = this.props;
        return (
                <div style={{width:600,marginBottom:20}}>
                    <span style={{width:500,marginRight:30}}>
                        <input name="l1" type="checkbox" value={item,test} />{item} {test}
                    </span>
                    <button onClick={this.deleteItem} style={{float:"right",width:70}}>删除</button>
                </div>
                
        )
    }
}


TodoItem.propTypes = {
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    test: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
    test: ' '
};