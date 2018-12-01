import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {

    const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = props;

    let cls = 'TodoListItem collection-item';

    if (done) {
        cls += ' done';
    }
    if (important) {
        cls += ' important';
    }

    return (
        <li className={cls}>
            <span onClick={onToggleDone}>{label}</span>
            <span>
                <button className="btn-floating waves-effect waves-light" onClick={onToggleImportant}><i
                    className="material-icons">flag</i></button>
                <button className="btn-floating waves-effect waves-light red"
                        onClick={onDeleted}>
                    <i className="material-icons">delete_forever</i>
                </button>
                </span>
        </li>
    )

};
export default TodoListItem;