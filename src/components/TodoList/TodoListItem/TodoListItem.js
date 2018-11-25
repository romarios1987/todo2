import React from 'react';
import './TodoListItem.css';

//label = props.label
//important = props.important
const TodoListItem = ({label, important = false}) => {

    const liStyle = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <li className='TodoListItem collection-item' style={liStyle}>
            {label}
            <span>
                <button className="btn-floating waves-effect waves-light"><i
                    className="material-icons">check</i></button>
                <button className="btn-floating waves-effect waves-light red"><i
                    className="material-icons">delete_forever</i></button>
            </span>
        </li>
    )
};

export default TodoListItem;