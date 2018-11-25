import React from 'react';
import './TodoList.css';
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        // В itemProps попадут все свойтва кроме id
        const {id, ...itemProps} = item;

        return (
            <TodoListItem key={id}
                          {...itemProps}
                // label={item.label}
                // important={item.important}
            />
        )
    });

    return (
        <div className='row'>
            <ul className='collection TodoList'>
                {elements}
            </ul>
        </div>

    )
};

export default TodoList;