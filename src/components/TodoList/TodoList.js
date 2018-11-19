import React from 'react';
import './TodoList.css';
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = () => {
    return (
        <ul>
            <TodoListItem/>
            <TodoListItem/>
        </ul>
    )
};

export default TodoList;