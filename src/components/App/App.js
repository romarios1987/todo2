import React from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {

    const todoData = [
        {label: 'React Learn', important: false, id: 1},
        {label: 'React Learn2', important: false, id: 2},
        {label: 'React Learn3', important: true, id: 3}
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <AppHeader/>
                    <SearchPanel/>
                    <TodoList todos={todoData}/>
                </div>
            </div>
        </div>
    )
};

export default App;